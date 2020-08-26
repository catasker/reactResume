import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import whitingTurner from '../../../assets/whitingTurner.jpg';


export const WhitingTurner = (props) => (
    <Row className='workExperienceRow'>
        <Col>
            <h5>The Whiting Turner Contracting Company, <i>Project Engineer</i></h5>
            <ul>
                <li>
                    Constructed detailed scopes for contractors’ responsibilities pertaining to multi-million-dollar jobs
                        </li>
                <li>
                    Successfully managed several trades valuing over a million dollars
                        </li>
                <li>
                    Collaborated with project team in problem solving daily
                        </li>
            </ul>
        </Col>
        <Col>
            <Image className="detailImage" src={whitingTurner} rounded>
            </Image>
        </Col>
    </Row>
)