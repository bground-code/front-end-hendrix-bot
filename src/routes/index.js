import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home/Home";
import Signup from "../pages/Cadastro/CadastroUsuario";
import Login from "../pages/Login/Login";
import CadastroUsuario from "../pages/Cadastro/CadastroUsuario";

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Signin />;
// };

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<CadastroUsuario />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
