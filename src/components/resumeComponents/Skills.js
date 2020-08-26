import React from 'react'
import { Container, Row } from 'react-bootstrap';

export const Skills = (props) => (
    <Container>
        <h3 id='skills'>Skills</h3>
        <hr></hr>
        <Row className="skillsRow">
            <ul>
                <li>Highly proficient in Python, HTML, CSS and Angular</li>
                <li>Significant experience with Atlassian products, Jira and Confluence</li>
                <li>Significant experience with Bitbucket and GitHub</li>
                <li>Experience with Amazon S3</li>
                <li>Certified Solidworks Associate</li>
                <li>Proficient in 3D modeling softwares AutoCAD, Fusion 360, Solidworks and Inventor</li>
                <li>Lean Manufacturing including standard work, Kaizen, value stream mapping, one-piece flow, WIP control, MUDA</li>
                <li>Experience with SAP</li>
                <li>Custom fabircation including design and assembly, utilizing MIG welding, of job specific tools</li>
            </ul>
        </Row>
    </Container>

)