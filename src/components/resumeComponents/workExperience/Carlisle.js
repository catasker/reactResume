import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import carlisle from '../../../assets/carlisle.jpg';


export const Carlisle = (props) => (
    <Row className='workExperienceRow'>
        <Col>
            <h5>Carlisle Construction Companies, <i>Warehouse and Shipping Intern</i></h5>
            <ul>
                <li>
                    Assessed and optimized three different warehouses to maximize storage of finished good materials
                        </li>
                <li>
                    Gained equivalent of 146 truck-loads of finished goods or 3.5 days of production worth $315,000 of avoided cost
                        </li>
                <li>
                    Created enhanced layout of offline production to fit the flow and capacity of all materials in area
                        </li>
                <li>
                    Established a standard work for offline area storage methods to sustain layout design
                        </li>
                <li>
                    Participated in a corporate Warehouse Optimization SIP team
                        </li>
                <li>
                    Collaborated with the team to develop future state layouts to tackle any issues faced by each individual facility
                        </li>
            </ul>
        </Col>
        <Col>
            <Image className="detailImage" src={carlisle} rounded>
            </Image>
        </Col>
    </Row>
)