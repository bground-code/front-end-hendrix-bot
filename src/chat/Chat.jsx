import React, { useState, useEffect } from "react";
import "./Chat.css";
import {
  Button,
  Box,
  Input,
  Stack,
  LinearProgress,
  Typography,
  Textarea,
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
        bgcolor: "#32383E",
        width: "70%",
      }}
      mt={6}
    >
      <Stack
        className="chat-messages"
        maxHeight={400}
        minHeight={400}
        spacing={1}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
        }}
        justifyContent="flex-end"
      >
        {messages.map((msg, index) => (
          <Box key={index} className={`message ${msg.type}`}>
            <Typography>
              {msg.type === "sent" ? (
                <Typography
                  textAlign="right"
                  variant="soft"
                  bgcolor="#171A1C"
                  className="sent"
                  px={1}
                  py={0.5}
                >
                  {msg.message}
                </Typography>
              ) : (
                <Typography
                  textAlign="left"
                  variant="soft"
                  bgcolor="#7D1212"
                  className="received"
                  px={1}
                  py={0.5}
                >
                  {msg.message}
                </Typography>
              )}
            </Typography>
          </Box>
        ))}
        {isTyping && (
          <Box width="90%">
            <LinearProgress color="neutral" variant="plain" />
          </Box>
        )}
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        pt={1}
        alignItems="flex-end"
        justifyContent="flex-end"
        sx={{ flexGrow: 1 }}
      >
        <Textarea
          type="text"
          value={inputMessage}
          variant="soft"
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Digite sua pergunta..."
          minRows={2}
          sx={{ mb: 1, width: "90%" }}
        />

        <Button onClick={sendMessage} variant="soft" color="danger">
          <SendRoundedIcon />
        </Button>
      </Stack>
    </Box>
  );
};

export default Chat;
