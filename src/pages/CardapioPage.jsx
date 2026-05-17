// src/pages/CardapioPage.jsx
import React, {useState, useEffect} from "react";
import {Row, Col, Spinner, Alert} from 'react-bootstrap'
import PizzaCard from '../components/PizzaCard'
// import calabresa from '../assets/calabresa.jpg'
// import marguerita from '../assets/marguerita.jpg'
// import frango from '../assets/frango.jpg'
import useApi from '../hooks/useApi'
import pizzasData from '../data/pizzas'

// Simulação do JSON
// const pizzas = [
//   {
//     id: 'p1',
//     name: 'Pizza Marguerita',
//     description: 'Molho de tomate, mussarela e manjericão',
//     price: 45.00,
//     image: (marguerita)
//   }, 
//   {
//     id: 'p2',
//     name: 'Pizza Calabresa',
//     description: 'Molho de tomate, mussarela, calabresa e cebola.',
//     price: 50.00,
//     image: (calabresa)
//   },
//   {
//     id: 'p3',
//     name: 'Pizza Frango com Catupiry',
//     description: 'Molho de tomate, mussarela, frango desfiado e catupiry',
//     price: 55.00,
//     image: (frango)
//   },
// ]

function CardapioPage() {

  // const { data, loading, error } = useApi('/api/pizzas')
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      try {
        setPizzas(pizzasData)
        setLoading(false)
      } catch (err) {
        setError('Erro ao carregar as pizzas.')
        setLoading(false)
      }
    }, 3000)
  }, [])

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p>Carregando cardápio...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Erro: {error}</Alert>;
  }

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
