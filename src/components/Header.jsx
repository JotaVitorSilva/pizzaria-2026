// src/components/Header.jsx
import React from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'; // Importar Link e NavL
import { useCart } from '../context/CartContext';

function Header() {
  const { cartState } = useCart();
  const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pizzaria Digital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/cardapio" className="nav-link">Cardápio</Nav.Link>
            <Nav.Link as={Link} to="/carrinho" className="nav-link">
              Carrinho 
              <Badge bg="secundary">
                {totalItems}
              </Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="nav-link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
