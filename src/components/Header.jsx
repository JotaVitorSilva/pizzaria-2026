// src/components/Header.jsx
import React from "react";
import { Navbar, Container, Nav, Badge, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Importar Link e NavL
import { useCart } from '../context/CartContext';
import {useAuth} from '../context/AuthContext';

function Header() {
  const { cartState } = useCart();
  const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
  const {isAuthenticated,user, logout} = useAuth();
  const navigate=useNavigate();
  
  const handleLogout = ()=>{
    logout();
    navigate('/login') 
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pizzaria Digital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/cardapio" className="nav-link">Cardápio</Nav.Link>
            <Nav.Link as={Link} to="/carrinho" className="nav-link">
              Carrinho 
              <Badge bg="secundary">
                {totalItems}
              </Badge>
            </Nav.Link>
          </Nav> 
          <Nav>
            {isAuthenticated ? (
              <>
                <Navbar.Text className="me-3">Olá, {user?.name}</Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>Sair</Button>
              </>
            ):(
              <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
