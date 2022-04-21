import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();

    const handleCheckout = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} className='w-100' />
                <Card.Body>
                    <Card.Text><h4>{name}</h4></Card.Text>
                    <Card.Text><h5>${price}</h5></Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => handleCheckout(id)} variant="success">Get Started</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;