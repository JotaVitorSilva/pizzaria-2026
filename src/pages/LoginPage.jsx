// src/pages/LoginPage.jsx
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate(); //Inicializar useNavigate para redirecionar após login

    const handleLogin = () => {
        // Lógica de login (ex: verificar credenciais)
        // Se login for bem-sucedido:
        alert("Login bem-sucedido!"); // Exemplo de feedback para o usuário
        navigate("/home"); // Redireciona para a página inicial
    };

  return (
    <div>
      <h1>Login</h1>
      <p>Acesse sua conta para fazer pedidos.</p>
      <Button variant="primary" onClick={handleLogin}>
        Entrar (Simulado)
      </Button>
    </div>
  );
}
export default LoginPage;
