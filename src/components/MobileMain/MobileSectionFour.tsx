import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom'; 
import { Button} from "@mui/material";


const SectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45vh;
    background-color: white;
`

const SectionWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 45vh;
`


interface IText{
    FontSize: string;
    FontColor: string;
    Width: string;
    Height: string;
    Isbold: boolean;
    Justify: string;
    Margin?: string;
    Align: string;
    LineHeight?: string;
}

const BrowserTextBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.Isbold ? "bold" : ""};
    color: ${(props) => props.FontColor};
    justify-content: ${(props) => props.Justify};
    align-items: ${(props) => props.Align};
    margin-left: ${(props) => props.Margin};
    line-height: ${(props) => props.LineHeight};
`

const SectionTitleWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
`

const SectionInfoWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 20vh;
    justify-content: space-between;
`
const SectionInfoComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 20vh;
`


const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 15vh;
    justify-content: space-evenly;
    align-items: center;
    
`



function BrowserMainsectionFour(){



    return(
        <SectionContainer>
            <SectionWrapper>
                <SectionTitleWrapper>
                    <BrowserTextBox Width='50%' Height='10vh' FontSize='1.5rem' FontColor='' Isbold={false} Justify ="right" Align='center'>"Easy to Use"</BrowserTextBox>
                    <BrowserTextBox Width='50%' Height='10vh' FontSize='1.5rem' FontColor='#63A0FF' Isbold={true} Justify ="left" Margin = "1vw" Align='center'>SUKKUNT</BrowserTextBox>
                </SectionTitleWrapper>
                <SectionInfoWrapper>
                    <SectionInfoComponent>
                        <BrowserTextBox Width='100%' Height='6vh' FontSize='1.2rem' FontColor='#374054' Isbold={true} Justify ="center" Align='center'>?????? ??????</BrowserTextBox>
                        <BrowserTextBox Width='100%' Height='14vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Justify ="center" Align="left" LineHeight = "2rem">????????? ????????? ?????? <br/> ????????? ????????? ?????? ??????</BrowserTextBox>
                    </SectionInfoComponent>
                    <SectionInfoComponent>
                        <BrowserTextBox Width='100%' Height='6vh' FontSize='1.2rem' FontColor='#374054' Isbold={true} Justify ="center" Align='center'>????????? ??????</BrowserTextBox>
                        <BrowserTextBox Width='100%' Height='14vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Justify ="center" Align='' LineHeight = "2rem">????????? ??????,<br/> ????????? ???????????? ????????????</BrowserTextBox>
                    </SectionInfoComponent>
                    <SectionInfoComponent>
                        <BrowserTextBox Width='100%' Height='6vh' FontSize='1.2rem' FontColor='#374054' Isbold={true} Justify ="center" Align='center'>????????????</BrowserTextBox>
                        <BrowserTextBox Width='100%' Height='14vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Justify ="center" Align='' LineHeight = "2rem">??????????????? ????????? <br/> ???????????? ?????? ??????</BrowserTextBox>
                    </SectionInfoComponent>
                </SectionInfoWrapper>
                <ButtonWrapper>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="/about"
                        sx={{width:"40%", height:"5vh", backgroundColor:"#63A0FF"}}
                    >?????? ??????</Button>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="/dashboard"
                        sx={{width:"40%", height:"5vh", backgroundColor:"#093687"}}
                    >???????????????</Button>
                </ButtonWrapper>
            </SectionWrapper>
        </SectionContainer>
    );
}

export default BrowserMainsectionFour;