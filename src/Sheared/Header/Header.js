import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logoes/strong-gym-logo.png'

const Header = () => {
    const [service, setService] = useState();
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
                        <Nav.Link href={service ? 'home#services' : '/home#services'}>SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                        <Nav.Link as={Link} to="/classes">CLASSES</Nav.Link>
                        <Nav.Link as={Link} to="/aboutMe">ABOUT ME</Nav.Link>
                        <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default Header;