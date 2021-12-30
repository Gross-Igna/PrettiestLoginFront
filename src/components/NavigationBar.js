import React from 'react';
import '../css/navbar.css'

//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () =>
        ( 
            <Navbar className="navbar-bg" expand="lg" id="parent-nav">
                <Navbar.Brand href="/">PrettiestPage</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/register">Get Started</Nav.Link>
                        <Nav.Link href="/about" disabled>About us</Nav.Link>
                        <Nav.Link href="/contact" disabled>Contact</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto" id="reg-log">
                        <Nav.Link href="/login"><b>Login</b></Nav.Link>
                        <Nav.Link disabled>|</Nav.Link>
                        <Nav.Link href="/register"><b>Register</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         )

 
export default NavigationBar;