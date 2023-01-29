import styled from 'styled-components';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import BackGround from '../../assets/images/BackTestBackGround.png';
import Navigator from '../../components/Navigator';
import CheckBox from '../../components/CheckBox';
import "react-datepicker/dist/react-datepicker.css";

const BrowserBackTestContainer = styled.div`
    padding-top: 8vh;

`

const BrowserBackTestImgContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
    z-index: 1;
    position: relative;

    &::after {
        content:'';
        width: 100%;
        height: 30vh;
        background-image: url(${BackGround});
        background-repeat: no-repeat;
        background-size: 100% 20vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.8;
    }

`

interface IText{
    FontSize: string;
    FontColor: string;
    Width: string;
    Height: string;
    Justify?: string;
    Align?: string;
    Left?: string;
    Right?:string;
    Isbold: boolean;
    
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
    padding-left:${(props) => props.Left};
    padding-right:${(props) => props.Right};
`

const BrowserBackTestComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    border : 1px solid #555555f0; 
    border-radius: 0.5rem;
    margin-left: 20%;
    padding:2%;
`
const BrowserBackTestSectionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`

interface ISelectBox{
    Height: string;
    Width: string;
}

const SelectBox = styled.div<ISelectBox>`
    display: flex;
    flex-direction: column;
    height: ${(props) => props.Height};
    width: ${(props) => props.Width};
    border: 1px solid #bdbdbdee;
`
interface ISelectBoxTop{
    Color:string;
}
const SelectBoxTop = styled.div<ISelectBoxTop>`
    display:flex;
    width: 100%;
    height: 30%;
    background-color: ${(props) => props.Color};
    font-size: 0.95rem;
    font-weight: bold;
    color:#555555f0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #bdbdbdee;
`
const SelectBoxBottom =styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;
`
const SelectionBoxBottomSplit = styled.div`
    display:flex;
    width:50%;
    height: 100%;
    padding-right: 5%;
    align-items: center;
    justify-content: center;
`


const DatePickerWrapper = styled.div`
    display: flex;
    width: 20%;
    justify-content: center;
`
const MyDatePicker = styled(DatePicker)`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
`   

const InputField = styled.input`
    display: flex;
    width: 20%;
    height: 30%;
    text-align: right;
`;

const BackTestButtonSection = styled.div`
    display: flex;
    height: 30vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const BackTestButtonWrapper = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
`

interface IBackTestButton{
    BackColor : string;
    FontColor : string;
}

const BackTestButton = styled.button<IBackTestButton>`
    display:flex;
    background-color: ${(props) => props.BackColor};
    width: 40%;
    height: 8vh;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.FontColor};
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 1rem;
    border: 10px #202020eb;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.1);
        transition: transform .5s;
        cursor: pointer;
    }
`


function BrowserBackTestPage(){
    const [Commission, setCommission] = useState<Number>(0.2);
    const [startDate, setStartDate] = useState<Date>(new Date('2023-01-01'));
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [isKospiChecked, setIsKospiChecked] = useState<boolean>(false);
    const [isKosdakChecked, setIsKosdakChecked] = useState<boolean>(false);
    const [numOfStock, setnumOfStock] = useState<Number>(0);
    const [sellRatio, setSellRatio] = useState<Number>(0);

    const navigate = useNavigate();

    useEffect(() =>{
        console.log(Number(Commission));

    }, [Commission]);

    useEffect(() =>{
        console.log("kospi:" + isKospiChecked + "/ kosdak:" + isKosdakChecked);

    }, [isKospiChecked, isKosdakChecked]);

    const handleChangeCommission = (e : any) => {
        //const { value } = e.target;
        //const onlyNumber = value.replace(/[^0-9]/g, '');
        setCommission(e.target.value);
    };

    const handleChangeNumOfStock = (e : any) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, '');
        setnumOfStock(onlyNumber);
    };

    const handleChangeSellRatio = (e : any) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, '');
        setSellRatio(onlyNumber);
    };


    const onClickCheck = (index : number) => {
        if(index === 0){
            setIsKospiChecked(!isKospiChecked);
        }
        if(index === 1){
            setIsKosdakChecked(!isKosdakChecked);
        }
    };





    

    return(
        <>
            <Navigator/>
            <BrowserBackTestContainer>
                <BrowserBackTestImgContainer>
                    <BrowserTextBox Width='30%' Height='20vh' FontSize='5rem' FontColor='white' Isbold={true} Justify="center" Align='center'>Back Test</BrowserTextBox>
                </BrowserBackTestImgContainer>
            </BrowserBackTestContainer>
            <BrowserTextBox Width='30%' Height='15vh' FontSize='2rem' FontColor='#374054' Isbold={true} Left="20%" Align='center'>백테스트</BrowserTextBox>
            <BrowserTextBox Width='50%' Height='10vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Left="20%">모델의 성능을 확인해보세요!</BrowserTextBox>
            <BrowserBackTestComponentContainer>
                <BrowserTextBox Width='100%' Height='8vh' FontSize='1.3rem' FontColor='#374054' Isbold={true} Align='center'>기본조건</BrowserTextBox>
                <BrowserBackTestSectionContainer>
                    <SelectBox Width='60%' Height='20vh'>
                        <SelectBoxTop Color ="#F1F3F5">운용기간</SelectBoxTop>
                        <SelectBoxBottom>
                            <DatePickerWrapper>
                                <MyDatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} selectsStart maxDate={endDate}/>
                            </DatePickerWrapper>
                            <BrowserTextBox Width='10%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="center">부터</BrowserTextBox>
                            <DatePickerWrapper>
                                <MyDatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} selectsEnd minDate={startDate}/>
                            </DatePickerWrapper>
                            <BrowserTextBox Width='10%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="center">까지</BrowserTextBox>
                        </SelectBoxBottom>
                    </SelectBox>
                    <SelectBox Width='35%' Height='20vh'>
                        <SelectBoxTop Color ="#F1F3F5">수수료율</SelectBoxTop>
                        <SelectBoxBottom>
                            <InputField min="0" max="5" placeholder="0.2" type= 'Number' step={0.1} onChange={handleChangeCommission} maxLength={3}></InputField>
                            <BrowserTextBox Width='15%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="center">%</BrowserTextBox>
                        </SelectBoxBottom>
                        
                    </SelectBox>
                </BrowserBackTestSectionContainer>
                <BrowserTextBox Width='100%' Height='8vh' FontSize='1.3rem' FontColor='red' Isbold={true} Align='center'>매수조건</BrowserTextBox>
                <BrowserBackTestSectionContainer>
                    <SelectBox Width='60%' Height='20vh'>
                        <SelectBoxTop Color ="#FCECEC">종목군</SelectBoxTop>
                        <SelectBoxBottom>
                            <SelectionBoxBottomSplit>
                                <CheckBox getCheck={() => onClickCheck(0)}/>
                                <BrowserTextBox Width='10%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="center" Left='15%'>KOSPI</BrowserTextBox>    
                            </SelectionBoxBottomSplit>
                            <SelectionBoxBottomSplit>
                                <CheckBox getCheck={() => onClickCheck(1)}/>
                                <BrowserTextBox Width='10%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="center" Left='20%'>KOSDAK</BrowserTextBox>
                            </SelectionBoxBottomSplit>
                        </SelectBoxBottom>
                    </SelectBox>
                    <SelectBox Width='35%' Height='20vh'>
                        <SelectBoxTop Color ="#FCECEC">최대 보유종목 수</SelectBoxTop>
                        <SelectBoxBottom>
                            <InputField min="0" max="25" placeholder="0" type= 'Number' onChange={handleChangeNumOfStock} maxLength={2}></InputField>
                            <BrowserTextBox Width='15%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="right" Left=' '>종목</BrowserTextBox>
                        </SelectBoxBottom>
                    </SelectBox>
                </BrowserBackTestSectionContainer>
                <BrowserTextBox Width='100%' Height='8vh' FontSize='1.3rem' FontColor='#63A0FF' Isbold={true} Align='center'>매도조건</BrowserTextBox>
                <BrowserBackTestSectionContainer>
                    <SelectBox Width='60%' Height='20vh'>
                        <SelectBoxTop Color ="#E1F1F8">매도 가격 기준</SelectBoxTop>
                        <SelectBoxBottom>
                            <BrowserTextBox Width='15%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="left" Left=' '>전일종가</BrowserTextBox>
                            <InputField min="0" max="100" placeholder="0" type= 'Number' onChange={handleChangeSellRatio} maxLength={2}></InputField>
                            <BrowserTextBox Width='10%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="center" Left=' '>%</BrowserTextBox>
                        </SelectBoxBottom>
                    </SelectBox>
                </BrowserBackTestSectionContainer>
            </BrowserBackTestComponentContainer>
            <BackTestButtonSection>
                <BackTestButtonWrapper>
                    <BackTestButton BackColor='#F1F3F5' FontColor ='#374054' onClick={() => navigate("/")}>처음으로</BackTestButton>
                    <BackTestButton BackColor='#63A0FF' FontColor='white' onClick={() => navigate("/result")}>백테스트 실행</BackTestButton>
                </BackTestButtonWrapper>
            </BackTestButtonSection>
        </>
    );
}

export default BrowserBackTestPage;