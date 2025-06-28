import React, { Fragment } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produto from "../pages/Produto";
import Servico from "../pages/Servicos";
import Cliente from "../pages/Cliente";
import CadastroCliente from "../pages/CadastroCliente";
import CadastroServico from "../pages/CadastroServico";
import CadastroProduto from "../pages/CadastroProduto";
import EstatisticaPage from "../pages/Estatisticas";

class RouterApp extends React.Component {
  render(): React.ReactNode {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/servico" element={<Servico />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/cadastrocliente" element={<CadastroCliente />} />
            <Route path="/cadastroservico" element={<CadastroServico />} />
            <Route path="/cadastroproduto" element={<CadastroProduto />} />
            <Route path="/estatistica" element={<EstatisticaPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default RouterApp;
