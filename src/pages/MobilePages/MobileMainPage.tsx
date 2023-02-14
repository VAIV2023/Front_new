import styled from 'styled-components';
import SectionImg2 from '../../assets/images/SectionImg3.png';
import MobileMainSectionTwo from '../../components/MobileMain/MobileSectionTwo';
import MobileMainSectionThree from '../../components/MobileMain/MobileSectionThree';
import MobileMainsectionFour from '../../components/MobileMain/MobileSectionFour';
import { Typography } from "@mui/material";




const MobileMainIntroContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
    z-index: 1;
    position: relative;
    

    &::after {
        content:'';
        width: 100%;
        height: 40vh;
        background-image: url(${SectionImg2});
        background-repeat: no-repeat;
        background-size: 100% 40vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.7;
    }

`
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
const MobileStockNumInfo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width:40vw;
    height:15vh;
`
const MobileKospiNumInfo = styled.div`
    display:flex;
    flex-direction: column;
    height:15vh;
    width: 10vw;
`
const MobileKosdakNumInfo = styled.div`
    display:flex;
    flex-direction: column;
    height:15vh;
    width: 10vw;
`





export default function MobileMainPage(){
    return(
        <>

            <MobileMainIntroContainer>
                <Typography variant="h4" sx={{ mb: 5, color: "white" }}>
                    연 50%의 수익률을 보장하는 로보어드바이저
                </Typography>
                <MobileTextBox FontSize='0.7em' FontColor='#37383B' Width= '95%' Height = '8vh' Isbold = {true} Align ={false}>자동화된 시스템으로 편리한 사용환경을 제공합니다</MobileTextBox>
                <MobileStockNumInfo>
                    <MobileKospiNumInfo>
                        <MobileTextBox FontSize='1.5em' FontColor='blue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>968</MobileTextBox>
                        <MobileTextBox FontSize='0.7em' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kospi</MobileTextBox>
                    </MobileKospiNumInfo>
                    <MobileKosdakNumInfo>
                        <MobileTextBox FontSize='1.5em' FontColor='darkblue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>1500</MobileTextBox>
                        <MobileTextBox FontSize='0.7em' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kosdak</MobileTextBox>
                    </MobileKosdakNumInfo>
                </MobileStockNumInfo>
            </MobileMainIntroContainer>  
            <MobileMainSectionTwo/>
            <MobileMainSectionThree/>
            <MobileMainsectionFour/>
                

        </>
    );
}