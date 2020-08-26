import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import graduation from '../../assets/graduation.jpg';



export const Education = (props) => (
    <Row className='educationRow' id='education'>
        <Col sm={4}>
            <Image className="detailImage" src={graduation} rounded>
            </Image>
        </Col>
        <Col sm={8}>
            <h3>Education</h3>
            <hr></hr>
            <h5>Benjamin Statler College of Engineer and Mineral Resources,
                        B.S. in Industrial Engineering</h5>
            <h5>West Virginia University - Morgantown, WV</h5>
            <h5>Overall GPA: 3.0</h5>
        </Col>

    </Row>
)