// src/pages/CardapioPage.jsx
import React from "react";
import {Row, Col} from 'react-bootstrap'
import PizzaCard from '../components/PizzaCard'
import calabresa from '../assets/calabresa.jpg'
import marguerita from '../assets/marguerita.jpg'
import frango from '../assets/frango.jpg'

// Simulação do JSON
const pizzas = [
  {
    id: 'p1',
    name: 'Pizza Marguerita',
    description: 'Molho de tomate, mussarela e manjericão',
    price: 45.00,
    image: (marguerita)
  }, 
  {
    id: 'p2',
    name: 'Pizza Calabresa',
    description: 'Molho de tomate, mussarela, calabresa e cebola.',
    price: 50.00,
    image: (calabresa)
  },
  {
    id: 'p3',
    name: 'Pizza Frango com Catupiry',
    description: 'Molho de tomate, mussarela, frango desfiado e catupiry',
    price: 55.00,
    image: (frango)
  },
]

function CardapioPage() {

  

  return (
    <div>
      <h1>Nosso Cardápio</h1>
      <p>Escolha suas pizzas favoritas!</p>
      <Row>
        {pizzas.map(pizza => (
          <Col key={pizza.id} sm={12} md={6} lb={4}>
            <PizzaCard pizza = {pizza} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default CardapioPage;
