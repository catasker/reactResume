import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import mylan from '../../../assets/mylan.jpg';


export const Mylan = (props) => (
    <Row className='workExperienceRow'>
        <Col>
            <h5>Mylan Pharmaceuticals, <i>Student Worker</i></h5>
            <ul>
                <li>
                    Interviewed employees to better understand underlying problems within the facility to create independent project
                        </li>
                <li>
                    Created SQL database to store, add and modify data entries for equipment location and room job status
                        </li>
                <li>
                    Created HTML based web page to locally navigate SQL database
                        </li>
                <li>
                    Collaborated with employees to better create a more user-friendly interface
                        </li>
            </ul>
        </Col>
        <Col>
            <Image className="detailImage" src={mylan} rounded>
            </Image>
        </Col>
    </Row>
)