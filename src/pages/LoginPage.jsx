// src/pages/LoginPage.jsx
import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate(); //Inicializar useNavigate para redirecionar após login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isAuthenticated } = useAuth();
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    // simulação da chamada de API (backend)
    if (data.email === "teste@pizzaria.com" && data.password === "123456") {
      const fakeToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzdWFyaW8gVGVzdGUiLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
      login(fakeToken);
      navigate("/");
    } else {
      setLoginError("Email ou senha inválidos");
    }
  };

  if (isAuthenticated) {
    return <p>Você já está logado. Redirecionando...</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Acesse sua conta para fazer pedidos.</p>
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            {...register("email", { required: "Email é obrigatório" })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
            {...register("password", { required: "Senha é obrigatória" })}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  );
}
export default LoginPage;
