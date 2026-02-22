import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom"; // Importar Routes e Route para definir as rotas das páginas
// Importar os componentes das páginas
import HomePage from "./pages/HomePage";
import CardapioPage from "./pages/CardapioPage";
import CarrinhoPage from "./pages/CarrinhoPage";
import LoginPage from "./pages/LoginPage";
import DetalhePizzaPage from "./pages/DetalhePizzaPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      {/* Garante que o footer fique no final da página */}
      <Header />
      <Container className="flex-grow-1 mt-4">
        <Routes>
          {" "}
          {/* Definir as rotas aqui */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/cardapio" element={<CardapioPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route index element={<LoginPage />} />
          <Route path="/pizza/:id" element={<DetalhePizzaPage />} />{" "}{/* Rota para detalhes da pizza */}
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}
export default App;
