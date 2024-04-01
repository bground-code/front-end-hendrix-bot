import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CadastroUsuario from "../pages/Cadastro/CadastroUsuario";
import CadastroAluno from "../pages/Cadastro/CadastroAluno";
import EdicaoCadastroAluno from "../pages/Cadastro/EdicaoCadastroAluno";
import EdicaoCadastroUsuario from "../pages/Cadastro/EdicaoCadastroAluno";
import EditarPerfilAluno from "../pages/UserProfile/editarPerfilAluno";
import PesquisarIntents from "../pages/GerenciarHendrix/PesquisarIntents";

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
          <Route exact path="/edicaoCadastroUsuario" element={<EdicaoCadastroUsuario />} />
          <Route exact path="/cadastroaluno" element={<CadastroAluno />} />
          <Route exact path="/edicaoCadastroAluno" element={<EdicaoCadastroAluno />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/editarPerfilAluno" element={<EditarPerfilAluno />} />
          <Route exact path="/pesquisarIntents" element={<PesquisarIntents />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
