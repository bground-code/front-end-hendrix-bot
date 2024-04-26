import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/joy/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './StylesIntents.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const GerenciarIntents = () => {
    const [intents, setIntents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [currentIntent, setCurrentIntent] = useState(null);
    const [newIntentName, setNewIntentName] = useState('');

    const fetchIntents = async () => {
        try {
            const response = await axios.get('http://localhost:8081/rasa');
            setIntents(response.data.map((intent, index) => ({
                ...intent,
                id: intent.id || (index + 1).toString(),
            })));
        } catch (error) {
            console.error('Error fetching intents:', error);
        }
    };

    useEffect(() => {
        fetchIntents();
    }, []);

    const handleOpenModal = (intentId) => {
        try {
            const intentToEdit = intents.find(intent => intent.id === intentId);
            setCurrentIntent(intentToEdit);
            setNewIntentName(intentToEdit.name);
            setOpenModal(true);
        } catch (error) {
            console.error('Error handling edit intent:', error);
        }
    };

    const handleEditIntentName = async () => {
        try {
            if (newIntentName.trim() !== '') {
                await axios.put(`http://localhost:8081/rasa/intents/${currentIntent.id}`, {name: newIntentName});
                alert("Nome da intenção atualizado com sucesso!");
                fetchIntents();
                setOpenModal(false);
            } else {
                alert("O nome da intenção não pode estar em branco!");
            }
        } catch (error) {
            console.error('Error editing intent name:', error);
        }
    };

    const handleCreateIntent = async () => {
        try {
            const newIntentName = prompt("Digite o nome da nova intenção:");
            if (newIntentName !== null) {
                const newIntent = {
                    name: newIntentName,
                    responses: [], // Empty responses array
                };
                await axios.post('http://localhost:8081/rasa/intents', newIntent);
                alert("Intenção criada com sucesso!");
                fetchIntents();
            }
        } catch (error) {
            console.error('Error creating intent:', error);
        }
    };

    const handleDeleteIntent = async (intentId) => {
        try {
            const confirmDelete = window.confirm("Tem certeza que deseja excluir esta intenção?");
            if (confirmDelete) {
                await axios.delete(`http://localhost:8081/rasa/intents/${intentId}`);
                alert("Intenção excluída com sucesso!");
                fetchIntents();
            }
        } catch (error) {
            console.error('Error deleting intent:', error);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box className="container">
                <Typography variant="h4" className="title" textAlign="center">
                    Gerenciar Intenções
                </Typography>
                <Button onClick={handleCreateIntent} variant="contained" color="primary" className="create-button">
                    Criar Nova Intenção
                </Button>
                <List className="intent-list">
                    {intents.map(intent => (
                        <ListItem key={intent.id} className="intent-item">
                            <Typography className="intent-name">
                                {intent.name}
                            </Typography>
                            <Button onClick={() => handleOpenModal(intent.id)} variant="contained" color="primary"
                                    className="edit-button">
                                Editar
                            </Button>
                            <Button onClick={() => handleDeleteIntent(intent.id)} variant="contained" color="secondary"
                                    className="delete-button">
                                Deletar
                            </Button>
                            {currentIntent && openModal && (
                                <Dialog open={openModal} onClose={handleCloseModal}>
                                    <DialogTitle>{`Editar Nome da Intenção: ${currentIntent.name}`}</DialogTitle>
                                    <DialogContent>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            label="Novo Nome"
                                            fullWidth
                                            value={newIntentName}
                                            onChange={(e) => setNewIntentName(e.target.value)}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleEditIntentName} color="primary">Salvar</Button>
                                        <Button onClick={handleCloseModal} color="secondary">Cancelar</Button>
                                    </DialogActions>
                                </Dialog>
                            )}

                        </ListItem>
                    ))}
                </List>
            </Box>
        </ThemeProvider>
    );
}
    export default GerenciarIntents;
