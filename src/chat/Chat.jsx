import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Stack,
  LinearProgress,
  Typography,
  Textarea,
  Grid,
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
      maxHeight={{ xs: 450, sm: 450, md: 450, lg: 500 }}
      minHeight={{ xs: 450, sm: 450, md: 450, lg: 500 }}
      bgcolor={"#32383E"}
      width={{ xs: "80%", sm: "80%", md: "80%", lg: "70%" }}
      mt={6}
      justifyContent="flex-end"
    >
      <Grid container direction="column" justifyContent="flex-end">
        <Grid
          className="chat-messages"
          maxHeight={{ xs: 350, sm: 350, md: 350, lg: 400 }}
          minHeight={{ xs: 350, sm: 350, md: 350, lg: 400 }}
          spacing={1}
          sx={{
            overflowY: "auto",
          }}
          justifyContent="flex-end"
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                padding: "0.2rem 1rem",
                maxWidth: "100%",
                wordWrap: "break-word",
                textAlign: msg.type === "sent" ? "right" : "left",
              }}
              className={`message ${msg.type}`}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  bgcolor: msg.type === "sent" ? "#171A1C" : "#7D1212",
                }}
              >
                {msg.message}
              </Typography>
            </Box>
          ))}
          {isTyping && (
            <Box width="90%">
              <LinearProgress color="neutral" variant="plain" />
            </Box>
          )}
        </Grid>
        <Grid>
          <Stack
            direction="row"
            spacing={2}
            pt={1}
            alignItems="flex-end"
            justifyContent="center"
          >
            <Textarea
              type="text"
              value={inputMessage}
              variant="soft"
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua pergunta..."
              minRows={2}
              sx={{ mb: 1, width: "90%" }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <Button onClick={sendMessage} variant="soft" color="danger">
              <SendRoundedIcon />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
