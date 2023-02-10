import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import btn_login_kakao from "../assets/images/btn_login_kakao.png";
import skku_logo from "../assets/images/skku_logo.png";
import vaiv_logo from "../assets/images/vaiv_logo.png";
import { useState  } from "react";
import { useRecoilState} from "recoil";
import { isLoggedInState, userID } from "../atoms/LoginAtom";
import { BaseURL } from '../data/BaseURL';


import {
  AccountType,
  AccountJSON,
} from "../types/user_info";


declare global {
  interface Window {
    Kakao: any;
  }
}

const LoginBoxContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  width: 40vw;
  height: 36vh;
  border-radius: 1vw;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
`;

const LogoContainer = styled.div`
  height: 18vh;
  width: 40vw;
  flex-direction: column;
  padding-bottom: 2.5vh;
`;

const VaivImageContainer = styled.div`
  display: flex;
  height: 13vh;
  justify-content: center;
  padding-top: 3vh;
  padding-bottom: 2vh;
`;
const SkkuImageContainer = styled.div`
  display: flex;
  height: 4vh;
  padding-left: 1vw;
  padding-top: 1vh;
`;
interface IKakaoImageContainer {
  isMouse: boolean;
}

const KakaoImageContainer = styled.div<IKakaoImageContainer>`
  display: flex;
  height: ${(props) => (props.isMouse ? "12.2vh" : "12vh")};
  justify-content: center;
  padding-top: 2vh;
  padding-bottom: 2vh;
  cursor: pointer;
`;

function LoginBox() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [isOnMouse, setIsOnMouse] = useState(false);
  const [userId, setUserId] = useRecoilState(userID);
  const navigate = useNavigate();

  const Login_URL = `${BaseURL}/login`;

  /* 임시 주식 목록 생성 start */
  // 임시 생성
  /* 임시 주식 목록 생성 end */
 


  function handleKakaoLogin() {
    window.Kakao.Auth.login({
      success() {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success(res: any) {
            setIsLoggedIn(true);
            axios.post(Login_URL,{ id: res.id })
            .then((response) => {
              console.log(response);
            }); 
            localStorage.setItem("id", res.id);
            localStorage.setItem(
              "nickname",
              res.kakao_account.profile.nickname
            );
            navigate("/");

/*             console.log(res);
            console.log(res.kakao_account);
            console.log(res.kakao_account.email);
            console.log(res.kakao_account.profile.nickname);
            console.log(res.kakao_account.gender);
            console.log(res.id);
            console.log(res.connected_at); */
            /* setUserId(res.id); 
            localStorage.setItem("id", res.id);
            localStorage.setItem(
              "nickname",
              res.kakao_account.profile.nickname
            ); */


            
            /* 여기서 id 가지고 DB에서 보유/매도 주식 목록 불러오기 */
            // 일단 임시값을 로컬스토리지에 저장
            //localStorage.setItem("account_list", JSON.stringify(account_list));
            // account_list.map((account) =>
            //   localStorage.setItem(
            //     account,
            //     JSON.stringify(stock_info[account])
            //   )
            // );
            //localStorage.setItem("stock_info", JSON.stringify(stock_info));
            /* 처음 로그인하는 id이면 DB에 새로 추가 */

            //navigate("/");
          },
          fail(err: any) {
            console.log(err);
          },
        });
      },
      fail(error: any) {
        console.log(error);
      },
    });
  }

  const handleOnMouse = () => {
    setIsOnMouse(true);
  };

  const handleOutMouse = () => {
    setIsOnMouse(false);
  };

  return (
    <LoginBoxContainer>
      <LogoContainer>
        <SkkuImageContainer>
          <img src={skku_logo}></img>
        </SkkuImageContainer>
        <VaivImageContainer>
          <img src={vaiv_logo}></img>
        </VaivImageContainer>
      </LogoContainer>
      <LogoContainer>
        <KakaoImageContainer
          isMouse={isOnMouse}
          onClick={() => handleKakaoLogin()}
          onMouseOver={() => handleOnMouse()}
          onMouseOut={() => handleOutMouse()}
        >
          <img src={btn_login_kakao}></img>
        </KakaoImageContainer>
      </LogoContainer>
    </LoginBoxContainer>
  );
}

export default LoginBox;
