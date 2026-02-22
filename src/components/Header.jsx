// src/components/Header.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'; // Importar Link e NavL
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pizzaria Digital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/cardapio" className="nav-link">Cardápio</Nav.Link>
            <Nav.Link as={Link} to="/carrinho" className="nav-link">Carrinho</Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
