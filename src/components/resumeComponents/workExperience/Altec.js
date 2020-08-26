import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import altec from '../../../assets/altec.jpg';


export const Altec = (props) => (
    <Row className='workExperienceRow'>
        <Col>
            <h5>Altec Industries, <i>Manufacturing Engineer Co-Op</i></h5>
            <ul>
                <li>
                    Led a Kaizen event focused on standard work and 5S improvements resulting in $17,000 in savings
                        </li>
                <li>
                    Designed and managed efficiency tracking system for electrical section of production line to better improve product quality and on time delivery
                        </li>
                <li>
                    Strategically created layout of weld training cell to efficiently utilize smaller area to do the same task
                        </li>
                <li>
                    Designed and helped to fabricate efficient and safe storage system utilizing two-bin inventory control methods
                        </li>
                <li>
                    Aided in management of kanban ordering system to successfully supply production line with parts
                        </li>
                <li>
                    Collaborated in weekly team meetings to discuss the yearly value stream map and implement kaizen events to reach future state goal
                        </li>
                <li>
                    Completed various independent hands on projects for a total cost savings of $30,000
                        </li>
            </ul>
        </Col>
        <Col>
            <Image className="detailImage" src={altec} rounded>
            </Image>
        </Col>
    </Row>
)