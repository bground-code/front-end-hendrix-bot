import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';

const StoryListComponent = () => {
    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState([]);
    const [value, setValue] = useState('');
    const [newStoryName, setNewStoryName] = useState('');
    const [newStepIntent, setNewStepIntent] = useState('');
    const [newStepAction, setNewStepAction] = useState('');
    const [editingStories, setEditingStories] = useState({});

    useEffect(() => {
        loadStories();
    }, []);

    const loadStories = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8081/stories');
            setStories(response.data.map(story => ({
                ...story,
                steps: story.steps || [] // Garantir que steps seja sempre um array
            })));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching stories:', error);
            setLoading(false);
        }
    };
    const createStory = async () => {
        try {
            const newStory = {
                name: newStoryName,
                steps: [
                    {
                        intentName: newStepIntent,
                        actionText: newStepAction
                    }
                ]
            };
            await axios.post('http://localhost:8081/stories', newStory);
            loadStories();
            setNewStoryName('');
            setNewStepIntent('');
            setNewStepAction('');
        } catch (error) {
            console.error('Error creating story:', error);
        }
    };

    const handleTextChange = (event) => {
        setValue(event.target.value);
    };

    const cleanFilter = () => {
        setValue('');
    };

    const handleStoryChange = (storyId, change) => {
        setEditingStories(prev => ({
            ...prev,
            [storyId]: {
                ...stories.find(story => story.id === storyId),
                ...prev[storyId],
                ...change,
            }
        }));
    };

    const handleStepChange = (storyId, stepIndex, field, value) => {
        setEditingStories(prev => {
            const story = prev[storyId] || stories.find(s => s.id === storyId);

            // Cria uma cópia profunda dos passos para evitar a mutação do estado
            const steps = story.steps.map((step, index) =>
                index === stepIndex ? { ...step, [field]: value } : step
            );

            return {
                ...prev,
                [storyId]: {
                    ...story,
                    steps
                }
            };
        });
    };

    const updateStory = async (storyId) => {
        try {
            const storyData = editingStories[storyId];
            // Verifica se há alguma edição para essa história
            if (storyData) {
                await axios.put(`http://localhost:8081/stories/${storyId}`, storyData);
                setEditingStories(prev => {
                    const newState = { ...prev };
                    delete newState[storyId]; // Remove a história do estado de edição
                    return newState;
                });
                loadStories();
            }
        } catch (error) {
            console.error('Error updating story:', error);
        }
    };
    const deleteStory = async (storyId) => {
        try {
            await axios.delete(`http://localhost:8081/stories/${storyId}`);
            loadStories();
        } catch (error) {
            console.error('Error deleting story:', error);
        }
    };


    const renderStories = () => {
        if (loading) {
            return <div>Loading...</div>;
        } else if (stories.length === 0) {
            return <div>No stories found.</div>;
        } else {
            return stories.map((story, i) => (
                <div key={story.id} className="story">
                    <h3>
                        <input
                            type="text"
                            value={editingStories[story.id]?.name || story.name}
                            onChange={e => handleStoryChange(story.id, {name: e.target.value})}
                        />
                        <button
                            onClick={() => updateStory(story.id)}
                            className="update-story-btn"
                        >
                            Atualizar História
                        </button>
                    </h3>
                    <button onClick={() => deleteStory(story.id)}>Deletar História</button>
                    <ul>
                        {story.steps.map((step, index) => (
                            <li key={index}>
                                <input
                                    type="text"
                                    value={editingStories[story.id]?.steps[index]?.intentName || step.intentName}
                                    onChange={e => handleStepChange(story.id, index, 'intentName', e.target.value)}
                                />
                                <strong>Passo:</strong> {step.intentName}
                                <input
                                    type="text"
                                    value={editingStories[story.id]?.steps[index]?.actionText || step.actionText}
                                    onChange={e => handleStepChange(story.id, index, 'actionText', e.target.value)}
                                />
                                <strong>Ação:</strong> {step.actionText}
                            </li>
                        ))}
                    </ul>
                </div>
            ));
        }
        
    }
    return (
        <div className="container">
            <div className="toolbar">
                <div>
                    <input
                        type="text"
                        placeholder="Filter"
                        value={value}
                        onChange={handleTextChange}
                    />
                    {value.trim().length > 0 && (
                        <button onClick={cleanFilter}>Clear Filter</button>
                    )}
                </div>
            </div>
            <div className="new-story-form">
                <input
                    type="text"
                    placeholder="Nome da história"
                    value={newStoryName}
                    onChange={e => setNewStoryName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Intenção"
                    value={newStepIntent}
                    onChange={e => setNewStepIntent(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Ação/Passo"
                    value={newStepAction}
                    onChange={e => setNewStepAction(e.target.value)}
                />
                <button onClick={createStory}>Criar Historia</button>
            </div>
            <div className="list-story">
                {renderStories()}
            </div>
        </div>
    );
};

export default StoryListComponent;
