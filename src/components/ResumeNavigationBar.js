import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

import styled from 'styled-components';

const Styles = styled.div`
    Navbar {
        width: 100px;
    }

    a {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 50px;
    }
`;

export const ResumeNavigationBar = () => (
    <Styles>
        <Navbar expand='lg' sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='m-auto'>
                    <Nav.Item>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Education</Link>
                        </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="workExperience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Work Experience</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Skills</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

)