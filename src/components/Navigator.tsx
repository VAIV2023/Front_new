import styled from 'styled-components';
import skkulogo from '../assets/images/skku_logo.png';
import { useNavigate } from "react-router-dom";

const NavigatorContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    background-color: aliceblue;
    width: 100%;
    height: 8vh;
    align-items: center;
`
const NavigatorImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 8vh;
`
const NavigatorLogo = styled.div`
    display:flex;
    background-image: url(${skkulogo});
    background-repeat : no-repeat;
    background-size: 10vw 5vh;
    width: 10vw;
    height: 5vh;
    cursor: pointer;
`

interface ILinkBox{
    Width: string;
}
const NavigatorLinkBox = styled.div<ILinkBox>`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: ${(props) => props.Width};
    height: 8vh;
    color: #2828297a;
    cursor: pointer;
`

const NavigatorLoginBox = styled.div<ILinkBox>`
    display:flex;
    position: absolute;
    right: 5vw;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: ${(props) => props.Width};
    height: 8vh;
    color: #2828297a;
    cursor: pointer;
`

function Navigator(){
    const navigate = useNavigate();

    function handleNavigatorClick(index: number){
        if(index === 0){
            navigate("/");
        }
        if(index === 1){
            navigate("/about");
        }
        if(index === 2){
            navigate("/todaystock");
        }
        if(index === 3){
            navigate("/portpolio");
        }
        if(index === 4){
            navigate("/login");
        }
    }

    
    return(
        <NavigatorContainer>
            <NavigatorImageContainer>
                <NavigatorLogo onClick = {() => handleNavigatorClick(0)}></NavigatorLogo>
            </NavigatorImageContainer>
            <NavigatorLinkBox Width = '8vw' onClick = {() => handleNavigatorClick(1)}>사용방법</NavigatorLinkBox>
            <NavigatorLinkBox Width = '8vw' onClick = {() => handleNavigatorClick(2)}>오늘의 종목</NavigatorLinkBox>
            <NavigatorLinkBox Width = '8vw' onClick = {() => handleNavigatorClick(3)}>포트폴리오</NavigatorLinkBox>
            <NavigatorLoginBox Width = '8vw' onClick = {() => handleNavigatorClick(4)}>로그인</NavigatorLoginBox>
        </NavigatorContainer>
    );
}

export default Navigator;