import React from 'react';
import '../css/navbar.css'

//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BsFillPersonFill} from 'react-icons/bs';


const Navigation = () =>
        ( 
            <Navbar className="navbar-bg" expand="lg">
                <Navbar.Brand href="/home">MyTradePapers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/profile">
                            <BsFillPersonFill size={30}/> <b>{localStorage.getItem("username")}</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
         )

 
export default Navigation;