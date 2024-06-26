import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/joy";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    localStorage.clear();

    navigate("/login");
  };

  return (
    <Button color="neutral" variant="plain" onClick={handleLogout}>
      Sair
    </Button>
  );
}

export default LogoutButton;
