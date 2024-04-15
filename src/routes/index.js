import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import CadastrarUsuario from "../pages/cadastrar/CadastrarUsuario";
import CadastrarAluno from "../pages/cadastrar/CadastrarAluno";
import EditarAluno from "../pages/cadastrar/EditarAluno";
import EditarUsuario from "../pages/cadastrar/EditarUsuario";
import GerenciarIntents from "../pages/gerenciar/GerenciarIntents";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/cadastrar-usuario"
            element={<CadastrarUsuario />}
          />
          <Route exact path="/cadastrar-aluno" element={<CadastrarAluno />} />
          <Route exact path="/editar-aluno" element={<EditarAluno />} />
          <Route exact path="/editar-usuario" element={<EditarUsuario />} />
          <Route exact path="/intents" element={<GerenciarIntents />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
