import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const HeaderNavbar = () => {
    return (
        <Navbar>
            <Container>
                <Nav className="ms-auto">
                    <Nav.Link className="ms-5" href="#home">Home</Nav.Link>
                    <Nav.Link className="ms-5" href="#about">About</Nav.Link>
                    <Nav.Link className="ms-5" href="#service">Dental Services</Nav.Link>
                    <Nav.Link className="ms-5 text-white" href="#reviews">Reviews</Nav.Link>
                    <Nav.Link className="ms-5 text-white" href="#blog">Blog</Nav.Link>
                    <Nav.Link className="ms-5 text-white" href="#contact">Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default HeaderNavbar;