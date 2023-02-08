import styled from 'styled-components';
import Navigator from '../../components/Navigator';
import SectionImg2 from '../../assets/images/SectionImg3.png';
import BrowserMainSectionTwo from '../../components/BrowserMain/SectionTwo';
import BrowserMainSectionThree from '../../components/BrowserMain/SectionThree';
import BrowserMainsectionFour from '../../components/BrowserMain/SectionFour';
import { useMutation } from "react-query";
import { fetchLogin } from '../../fetch/fetchLogin/fetchLogin';
import { useRecoilState } from 'recoil';
import { userID } from '../../atoms/LoginAtom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { AuthKEY, EndPoint } from '../../data/KRX';

//import axios from 'axios';

const BrowserMainContainer = styled.div`
    height:100%;
    padding-top: 8vh;
    background-color: white;
`

const BrowserMainIntroContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    z-index: 1;
    position: relative;

    &::after {
        content:'';
        width: 100%;
        height: 60vh;
        background-image: url(${SectionImg2});
        background-repeat: no-repeat;
        background-size: 100% 60vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.4;
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
const BrowserStockNumInfo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:20vw;
    height:15vh;
`
const BrowserKospiNumInfo = styled.div`
    display:flex;
    flex-direction: column;
    height:15vh;
    width: 10vw;
`
const BrowserKosdakNumInfo = styled.div`
    display:flex;
    flex-direction: column;
    height:15vh;
    width: 10vw;
`
//------------Main Page Section 1







    // (res) => console.log(res.data.response.body.items.item[0])

function BrowserMainPage(){
    
    const [userId, setUserId] = useRecoilState(userID);
    console.log(userId);

    const {mutate} = useMutation(() => fetchLogin(userId),{
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => console.log(error),
    });

    return(
        <>
            <Navigator/>
            <BrowserMainContainer>
                <BrowserMainIntroContainer>
                    <BrowserTextBox FontSize='2.2rem' FontColor='' Width= '60vw' Height = '10vh' Isbold = {true} Align ={true}>연 50%의 수익률을 보장하는 로보어드바이저</BrowserTextBox>
                    <BrowserTextBox FontSize='1rem' FontColor='#555555f0' Width= '45vw' Height = '8vh' Isbold = {true} Align ={false}>자동화된 시스템으로 편리한 사용환경을 제공합니다</BrowserTextBox>
                    <BrowserStockNumInfo>
                        <BrowserKospiNumInfo>
                            <BrowserTextBox FontSize='2rem' FontColor='blue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>968</BrowserTextBox>
                            <BrowserTextBox FontSize='1rem' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kospi</BrowserTextBox>
                        </BrowserKospiNumInfo>
                        <BrowserKosdakNumInfo>
                            <BrowserTextBox FontSize='2rem' FontColor='darkblue' Width= '10vw' Height = '9vh' Isbold = {true} Align ={true}>1500</BrowserTextBox>
                            <BrowserTextBox FontSize='1rem' FontColor='#6f6f6fef' Width= '10vw' Height = '6vh' Isbold = {false} Align ={false}>Kosdak</BrowserTextBox>
                        </BrowserKosdakNumInfo>
                    </BrowserStockNumInfo>
                </BrowserMainIntroContainer>
                <BrowserMainSectionTwo/>
                <BrowserMainSectionThree/>
                <BrowserMainsectionFour/>
                

            </BrowserMainContainer>
        </>
        
            
        
    );
}

export default BrowserMainPage;