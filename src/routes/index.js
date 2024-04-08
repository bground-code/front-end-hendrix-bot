import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import CadastrarUsuario from "../pages/cadastrar/CadastrarUsuario";
import CadastrarAluno from "../pages/cadastrar/CadastrarAluno";

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
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/cadastrar-usuario"
            element={<CadastrarUsuario />}
          />
          <Route exact path="/cadastrar-aluno" element={<CadastrarAluno />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
