import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [websocket, setWebsocket] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8081/chat');

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = (event) => {
            const receivedMessages = JSON.parse(event.data).message; 
            const parsedMessages = JSON.parse(receivedMessages);
            parsedMessages.forEach((message, index) => {
                setTimeout(() => {
                    setMessages(prevMessages => [...prevMessages, { message: message.text, type: 'received' }]);
                    console.log(message.text);
                }, index * 1000);
            });
        };
        setWebsocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (inputMessage.trim() === '') return;

        const messageText = inputMessage.trim();

        setMessages((prevMessages) => [...prevMessages, { message: messageText, type: 'sent' }]);
        setIsTyping(true);
        setTimeout(() => {
            websocket.send(JSON.stringify({ message: messageText }));
            setIsTyping(false);
        }, 3000);

        setInputMessage('');
    };

    useEffect(() => {
        const chatMessagesElement = document.querySelector('.chat-messages');
        chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        <span className="message-content">{msg.message}</span>
                    </div>
                ))}
                {isTyping && <div className="message received"><span className="message-content">...</span></div>} {/* Exibe "..." quando o chatbot está digitando */}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
