import React, { useState, useEffect } from "react";
import "./Chat.css";
import {
  Button,
  Box,
  Input,
  Stack,
  LinearProgress,
  Typography,
} from "@mui/joy";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [websocket, setWebsocket] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8081/chat");

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      const receivedMessages = JSON.parse(event.data).message;
      const parsedMessages = JSON.parse(receivedMessages);
      parsedMessages.forEach((message, index) => {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: message.text, type: "received" },
          ]);
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
    if (inputMessage.trim() === "") return;

    const messageText = inputMessage.trim();

    setMessages((prevMessages) => [
      ...prevMessages,
      { message: messageText, type: "sent" },
    ]);
    setIsTyping(true);
    setTimeout(() => {
      websocket.send(JSON.stringify({ message: messageText }));
      setIsTyping(false);
    }, 3000);

    setInputMessage("");
  };

  useEffect(() => {
    const chatMessagesElement = document.querySelector(".chat-messages");
    chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
  }, [messages]);

  return (
    <Box
      borderRadius={8}
      p={2}
      sx={{
        bgcolor: "#636B74",
      }}
      mt={6}
    >
      <Stack
        className="chat-messages"
        maxHeight={400}
        minHeight={200}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}
        justifyContent="flex-end"
      >
        {messages.map((msg, index) => (
          <Box key={index} className={`message ${msg.type}`}>
            <Typography>
              <Typography
                textAlign={"right"}
                variant="soft"
                bgcolor={"neutral.700"}
              >
                {msg.message}
              </Typography>
            </Typography>
          </Box>
        ))}
        {isTyping && (
          <div className="message received">
            {/* <span className="message-content">...</span> */}
            <LinearProgress color="neutral" variant="plain" />
          </div>
        )}{" "}
        {/* Exibe "..." quando o chatbot está digitando */}
      </Stack>
      <Stack direction="row" spacing={2} pt={1}>
        <Input
          type="text"
          value={inputMessage}
          variant="soft"
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Digite sua pergunta..."
        />
        <Button variant="soft" color="danger" onClick={sendMessage}>
          <SendRoundedIcon />
        </Button>
      </Stack>
    </Box>
  );
};

export default Chat;
