import styled from 'styled-components';
import blueback from '../../assets/images/blueback.png';
import {TbSettingsAutomation} from 'react-icons/tb';
import { TbPlugConnected } from "react-icons/tb";

const SectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    width: 100%;
    height: 70vh;
    z-index: 1;
    position: relative;
   

    &::after {
        content:'';
        width: 100%;
        height: 70vh;
        background-image: url(${blueback});
        background-repeat: no-repeat;
        background-size: 100% 70vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.8;
    }
`

const SectionWrapper = styled.div`
    display: flex;
    width: 50%;
    height: 40vh;
`
interface IIconContainer{
    Margin ?: string;
}

const SectionIconContainer = styled.div<IIconContainer>`
    display: flex;
    flex-direction: column;
    margin-left: ${(props) => props.Margin};
    width: 40%;
    height: 40vh;
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

const BrowserTextBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.Isbold ? "bold" : ""};
    color: ${(props) => props.FontColor};
    justify-content: center;
    align-items: ${(props) => props.Align ? "center" : ""};
`

function BrowserMainsectionThree(){
    return(
        <SectionContainer>
            <BrowserTextBox Width="50%" Height='25vh' FontSize='2.5rem' FontColor="white" Isbold={true}  Align ={true}>SKKUNT의 비전</BrowserTextBox>
            <SectionWrapper>
                <SectionIconContainer>
                    <TbSettingsAutomation color='white' size = '70%'></TbSettingsAutomation>
                    <BrowserTextBox Width="100%" Height='7vh' FontSize='1.5rem' FontColor="white" Isbold={true}  Align ={true}>Automatic</BrowserTextBox>
                </SectionIconContainer>
                <SectionIconContainer Margin = "20%">
                    <TbPlugConnected color='white' size = '70%'></TbPlugConnected>
                    <BrowserTextBox Width="100%" Height='7vh' FontSize='1.5rem' FontColor="white" Isbold={true}  Align ={true}>Easy to Use</BrowserTextBox>
                </SectionIconContainer>    
            </SectionWrapper>
        </SectionContainer>
    );
}

export default BrowserMainsectionThree;