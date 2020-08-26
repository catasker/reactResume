import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { ResumeNavigationBar } from "./ResumeNavigationBar"
import { IconicAir } from "../components/resumeComponents/workExperience/IconicAir"
import { Corhart } from "../components/resumeComponents/workExperience/Corhart"
import { WhitingTurner } from "../components/resumeComponents/workExperience/WhitingTurner"
import { Mylan } from "../components/resumeComponents/workExperience/Mylan"
import { Carlisle } from "../components/resumeComponents/workExperience/Carlisle"
import { Altec } from "../components/resumeComponents/workExperience/Altec"
import { Skills } from "../components/resumeComponents/Skills"
import { Education } from "../components/resumeComponents/Education"






const Styles = styled.div`
    .detailImage {
        display: block;
        height: 400px;
        z-index: -2;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    h5 {
        padding-bottom: 20px;
    }

    .educationRow {
        padding-bottom: 50px;
    }

    .workExperienceRow {
        padding-bottom: 50px;
    }

    .skillsRow {
        padding-bottom: 50px;
    }
`;


export const Resume = (props) => (
    <Styles>
        <ResumeNavigationBar></ResumeNavigationBar>
        <Container>
            <Education></Education>
            <h3 id='workExperience'>Work Experience</h3>
            <hr></hr>
            <IconicAir></IconicAir>
            <Corhart></Corhart>
            <WhitingTurner></WhitingTurner>
            <Mylan></Mylan>
            <Carlisle></Carlisle>
            <Altec></Altec>
            <Skills></Skills>
        </Container>
    </Styles>

)
