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
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const GerenciarIntents = () => {
    const [intents, setIntents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [currentIntent, setCurrentIntent] = useState(null);

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
            if (intentToEdit) {
                let message = `Editar Intenção: ${intentToEdit.name}\n\n`;
                if (intentToEdit.responses && intentToEdit.responses.length > 0) {
                    message += "Respostas:\n";
                    intentToEdit.responses.forEach((response, index) => {
                        message += `${index + 1}. ${response.text}\n`;
                    });
                } else {
                    message += "Nenhuma resposta disponível";
                }
                const editedResponse = prompt(message);
                if (editedResponse !== null) {
                    alert("Resposta editada com sucesso!");
                }
            }
        } catch (error) {
            console.error('Error handling edit intent:', error);
        }
    };

    const handleCreateIntent = async () => {
        try {
            const newIntentName = prompt("Digite o nome da nova intenção:");
            if (newIntentName !== null) {
                const responses = [];
                let responseText = prompt("Digite o texto da resposta:");
                while (responseText !== null) {
                    responses.push({ text: responseText });
                    responseText = prompt("Digite outro texto da resposta (ou clique em Cancelar para finalizar):");
                }
                const newIntent = {
                    name: newIntentName,
                    responses: responses,
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
            <Box
                sx={{
                    width: '100%',
                    padding: '20px',
                    backgroundColor: '#212121',
                    minHeight: '100vh',
                }}
            >
                <Typography level="h4" textAlign="center" sx={{ mb: 2, color: 'white' }}>
                    Gerenciar Intenções
                </Typography>
                <Button onClick={handleCreateIntent} variant="contained" color="primary" sx={{ mb: 2 }}>
                    Criar Nova Intenção
                </Button>
                <List sx={{ backgroundColor: '#424242', borderRadius: '10px', p: 0 }}>
                    {intents.map(intent => (
                        <ListItem
                            key={intent.id}
                            onClick={() => handleOpenModal(intent.id)}
                            sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#616161' } }}
                        >
                            <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                                {intent.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                Clique para ver detalhes
                            </Typography>
                            <Button onClick={() => handleDeleteIntent(intent.id)} variant="contained" color="secondary">
                                Deletar
                            </Button>
                        </ListItem>
                    ))}
                </List>
                {currentIntent && (
                    <Dialog open={openModal} onClose={handleCloseModal}>
                        <DialogTitle>{`Detalhes da Intenção: ${currentIntent.name}`}</DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">Fechar</Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Box>
        </ThemeProvider>
    );
}

export default GerenciarIntents;
