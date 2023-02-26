import styled from 'styled-components';
import skkulogo from '../assets/images/skku_logo.png';
import { useNavigate } from "react-router-dom";
import { useRecoilState} from "recoil";
import { isLoggedInState } from "../atoms/LoginAtom";
//import {AiOutlineUser} from "react-icons/ai";

const NavigatorContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    background-color: aliceblue;
    width: 100%;
    height: 8vh;
    align-items: center;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    z-index: 2;
    opacity: 0.7;
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
    font-weight: bold;
    width: ${(props) => props.Width};
    height: 8vh;
    color: #2828297a;
    cursor: pointer;

    &:hover {
        color : #374054;
    }
`

const NavigatorLoginBox = styled.div<ILinkBox>`
    display:flex;
    position: absolute;
    right: 5vw;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    width: ${(props) => props.Width};
    height: 8vh;
    color: #2828297a;
    cursor: pointer;

    &:hover {
        color : #374054;
    }
`

function Navigator(){
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
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
            navigate("/backtest");
        }
        if(index === 4){
            navigate("/portpolio/main");
        }
        if(index === 5){
            navigate("/login");
        }
    }


    function handleKakaoLogOut() {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.API.request({
                url: "/v1/user/unlink",
                success(res: any) {
                    setIsLoggedIn(false);
                    alert("로그아웃 되었습니다");
                    console.log(res);
    
                    /* 로컬스토리지 삭제 */
                    localStorage.removeItem("id");
                    localStorage.removeItem("nickname");
                    //localStorage.removeItem("account_list");
                    //localStorage.removeItem("stock_info");
                },
                fail(error: any) {
                console.log(error);
                },
            });
            window.Kakao.Auth.setAccessToken(undefined);
        }else{
            setIsLoggedIn(false);
            localStorage.removeItem("id");
            localStorage.removeItem("nickname");
            alert("로그아웃 되었습니다");
        }
        navigate("/");
    };

    
    return(
        <NavigatorContainer>
            <NavigatorImageContainer>
                <NavigatorLogo onClick = {() => handleNavigatorClick(0)}></NavigatorLogo>
            </NavigatorImageContainer>
            {/* <NavigatorLinkBox Width = '8vw' onClick = {() => handleNavigatorClick(1)}>사용방법</NavigatorLinkBox> */}
            <NavigatorLinkBox Width = '8vw' onClick = {() => handleNavigatorClick(2)}>오늘의 종목</NavigatorLinkBox>
            <NavigatorLinkBox Width = '8vw' onClick = {() => handleNavigatorClick(3)}>백테스트</NavigatorLinkBox>
            <NavigatorLinkBox Width = '8vw' onClick = {() => handleNavigatorClick(4)}>포트폴리오</NavigatorLinkBox>
            {isLoggedIn? (
                <>
                    <NavigatorLoginBox Width = '8vw' onClick = {handleKakaoLogOut}>로그아웃</NavigatorLoginBox>
                </>
            ):(
                <>
                    <NavigatorLoginBox Width = '8vw' onClick = {() => handleNavigatorClick(5)}>로그인</NavigatorLoginBox>
                </>
            )}
            
            
        </NavigatorContainer>
    );
}

export default Navigator;