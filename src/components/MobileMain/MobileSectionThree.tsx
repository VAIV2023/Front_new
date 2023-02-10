import styled from 'styled-components';
import blueback from '../../assets/images/blueback.png';
import {TbSettingsAutomation} from 'react-icons/tb';
import { TbPlugConnected } from "react-icons/tb";
import { Typography } from "@mui/material";


const SectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    width: 100%;
    height: 50vh;
    z-index: 1;
    position: relative;
   

    &::after {
        content:'';
        width: 100%;
        height: 50vh;
        background-image: url(${blueback});
        background-repeat: no-repeat;
        background-size: 100% 50vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.8;
    }
`

const SectionWrapper = styled.div`
    display: flex;
    width: 60%;
    height: 20vh;
    @media (max-width: 768px) {
        width:80%
    }
`
interface IIconContainer{
    Margin ?: string;
}

const SectionIconContainer = styled.div<IIconContainer>`
    display: flex;
    flex-direction: column;
    margin-left: ${(props) => props.Margin};
    width: 40%;
    height: 20vh;
    border-style: solid;
    border-width: 2px;
    border-radius: 1rem;
    border-color: white;
    align-items: center;

`;


interface IText{
    FontSize: string;
    FontColor: string;
    Width: string;
    Height: string;
    Isbold: boolean;
    Align: boolean;
}

const MobileTextBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.Isbold ? "bold" : ""};
    color: ${(props) => props.FontColor};
    justify-content: center;
    align-items: ${(props) => props.Align ? "center" : ""};
`

function MobileMainsectionThree(){
    return(
        <SectionContainer>
            <Typography variant='h2' sx={{pt:5, pb:8, color:"white" }}>SKKUNT의 비전</Typography>
            <SectionWrapper>
                <SectionIconContainer>
                    <TbSettingsAutomation color='white' size = '70%'></TbSettingsAutomation>
                    <MobileTextBox Width="100%" Height='7vh' FontSize='1.5rem' FontColor="white" Isbold={true}  Align ={true}>Automatic</MobileTextBox>
                </SectionIconContainer>
                <SectionIconContainer Margin = "20%">
                    <TbPlugConnected color='white' size = '70%'></TbPlugConnected>
                    <MobileTextBox Width="100%" Height='7vh' FontSize='1.5rem' FontColor="white" Isbold={true}  Align ={true}>Easy to Use</MobileTextBox>
                </SectionIconContainer>    
            </SectionWrapper>
        </SectionContainer>
    );
}

export default MobileMainsectionThree;