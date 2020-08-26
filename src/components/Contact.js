import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    Form {
        width: 50%;
    }

    h3 {
        padding-top: 100px;
        padding-bottom: 20px;
    }
`


export const Contact = () => (

    <Styles>
        <Container>
            <Form className='m-auto'>
                <h3>Contact Me</h3>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Message for Coleton</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </div>

            </Form>
        </Container>

    </Styles>

)
