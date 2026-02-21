// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {" "}
      {/* Garante que o footer fique no final da página */}
      <Header />
      <Container className="flex-grow-1 mt-4">
        {/* Conteúdo principal da aplicação será renderizado aqui */}
        <h1>Bem-vindo à Pizzaria Digital!</h1>
        <p>Explore nosso delicioso cardápio e faça seu pedido.</p>
      </Container>
      <Footer />
    </div>
  );
}
export default App;
