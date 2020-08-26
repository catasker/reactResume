import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import corhart from '../../../assets/corhart.jpg';


export const Corhart = (props) => (
    <Row className='workExperienceRow'>
        <Col>
            <h5>Corhart Refractories, <i>Reliability Engineer</i></h5>
            <ul>
                <li>
                    Independently developed a program to indeitify trends in material shrinkage for all products made at the facility
                        </li>
                <li>
                    Efficiently managed several projects in unison to reach one collective goal of better the production and the facility
                        </li>
                <li>
                    Integrated ideas with team of general maintenance employees to collectively solve common issues experienced
                        </li>
                <li>
                    Entered into a production facility with zero background of the equipment or process and successfully implemented useful tools to better employees and management
                        </li>
            </ul>
        </Col>
        <Col>
            <Image className="detailImage" src={corhart} rounded>
            </Image>
        </Col>
    </Row>
)