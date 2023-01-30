import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import btn_login_kakao from "../assets/images/btn_login_kakao.png";
import skku_logo from "../assets/images/skku_logo.png";
import vaiv_logo from "../assets/images/vaiv_logo.png";
import { useState } from "react";
import { useRecoilState} from "recoil";
import { isLoggedInState } from "../atoms/LoginAtom";
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
  const navigate = useNavigate();

  /* 임시 주식 목록 생성 start */
  // 임시 생성
  const account1: AccountType = {
    is_simulating: true,
    sell_stock: [
      {
        ticker: "A00",
        stockname: "sam",
        buy_date: "2022-12-01",
        buy_price: 500,
        quantity: 5,
        buy_total_price: 2500,
        sell_date: "2022-12-28",
        sell_price: 505,
        sell_total_price: 2525,
        rate: 1,
      },
      {
        ticker: "A01",
        stockname: "sung",
        buy_date: "2022-12-01",
        buy_price: 1000,
        quantity: 40,
        buy_total_price: 40000,
        sell_date: "2023-1-10",
        sell_price: 1200,
        sell_total_price: 48000,
        rate: 20,
      },
    ],
    holding_stock: [
      {
        ticker: "A02",
        stockname: "naver",
        buy_date: "2022-12-01",
        buy_price: 7000,
        quantity: 7,
        buy_total_price: 49000,
      },
      {
        ticker: "A03",
        stockname: "kakao",
        buy_date: "2022-12-01",
        buy_price: 8000,
        quantity: 8,
        buy_total_price: 64000,
      },
      {
        ticker: "A04",
        stockname: "SKhynix",
        buy_date: "2022-12-01",
        buy_price: 9000,
        quantity: 9,
        buy_total_price: 81000,
      },
    ],
    total_buy: 236500,
    real_gain: 8525,
    real_profit: 20.05,
  };
  const account2: AccountType = {
    is_simulating: false,
    sell_stock: [],
    holding_stock: [],
    total_buy: 0,
    real_gain: 0,
    real_profit: 0,
  };
  const account3: AccountType = {
    is_simulating: false,
    sell_stock: [],
    holding_stock: [],
    total_buy: 0,
    real_gain: 0,
    real_profit: 0,
  };
  const account_list: string[] = ["skku", "vaiv", "winter"];
  const stock_info: AccountJSON = {
    skku: account1,
    vaiv: account2,
    winter: account3,
  };
  /* 임시 주식 목록 생성 end */

  function handleKakaoLogin() {
    window.Kakao.Auth.login({
      success() {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success(res: any) {
            setIsLoggedIn(true);
            console.log(res);
            console.log(res.kakao_account);
            console.log(res.kakao_account.email);
            console.log(res.kakao_account.profile.nickname);
            console.log(res.kakao_account.gender);
            console.log(res.id);
            console.log(res.connected_at);
            localStorage.setItem("id", res.id);
            localStorage.setItem(
              "nickname",
              res.kakao_account.profile.nickname
            );

            /* 여기서 id 가지고 DB에서 보유/매도 주식 목록 불러오기 */
            // 일단 임시값을 로컬스토리지에 저장
            localStorage.setItem("account_list", JSON.stringify(account_list));
            // account_list.map((account) =>
            //   localStorage.setItem(
            //     account,
            //     JSON.stringify(stock_info[account])
            //   )
            // );
            localStorage.setItem("stock_info", JSON.stringify(stock_info));
            /* 처음 로그인하는 id이면 DB에 새로 추가 */

            navigate("/");
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
