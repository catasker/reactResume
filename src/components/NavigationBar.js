import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';



export const NavigationBar = () => (
    <Navbar expand='lg' bg="dark" variant="dark">
        <Navbar.Brand>Coleton Tasker React Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
                <Nav.Item>
                    <Nav.Link href="/">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)