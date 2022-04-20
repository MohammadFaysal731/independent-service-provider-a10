import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logoes/strong-gym-logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home" >
                    <img className='rounded-circle mx-2' src={logo} alt="" />
                    STRONG GYM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="home#services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                        <Nav.Link as={Link} to="/classes">CLASSES</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;