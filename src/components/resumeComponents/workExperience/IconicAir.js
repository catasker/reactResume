import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import iconicAirHomePage from '../../../assets/iconicAirHomePage.PNG';



export const IconicAir = (props) => (
    <Row className='workExperienceRow'>
        <Col>
            <h5>Iconic Air, <i>Front-End Developer</i></h5>
            <ul>
                <li>
                    Worked directly with graphic designer to design entire site workflow
                        </li>
                <li>
                    Utlilized Angular, CSS and HTML to translate visual displays into a functioning front end web application
                        </li>
                <li>
                    Collaborated with multi-functional team members to develop efficient end-to-end work flow
                        </li>
                <li>
                    Independently learned Angular Framework and applied learnings to help develop a fully functional web application
                        </li>
            </ul>
        </Col>
        <Col>
            <Image className="detailImage" src={iconicAirHomePage} rounded>
            </Image>
        </Col>
    </Row>
)