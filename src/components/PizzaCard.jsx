import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext'

function PizzaCard({pizza}){
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({type: 'ADD_ITEM', payload: pizza});
        alert(`${pizza.name} adicionada ao carrinho`);
    }

    return (
        <Card style={{width: '18rem', marginBottom: '20px'}}>
            <Card.Img variant="top" src={pizza.image} alt={pizza.nome} />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                    {pizza.description}

                    <strong>R$ {pizza.price.toFixed(2)}</strong>
                </Card.Text>
                <Button variant="primary" 
                    onClick={handleAddToCart}>
                        Adicionar ao Carrinho
                </Button>
            </Card.Body>
        </Card>
    )
}

export default PizzaCard;