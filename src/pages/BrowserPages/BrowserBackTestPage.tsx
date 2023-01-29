import styled from 'styled-components';
import Navigator from '../../components/Navigator';
import { useState, useEffect } from "react";
import BackGround from '../../assets/images/BackTestBackGround.png';
import DatePicker from "react-datepicker";
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
    padding-left:${(props) => props.Right};
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

function BrowserBackTestPage(){
    const [Commission, setCommission] = useState<Number>(0.2);
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [startDate, setStartDate] = useState<Date>(new Date('2023-01-01'));

    useEffect(() =>{
        console.log(Number(Commission));

    }, [Commission]);

    const handleChangeCommission = (e : any) => {
        //const { value } = e.target;
        //const onlyNumber = value.replace(/[^0-9]/g, '');
        setCommission(e.target.value);
    };

    return(
        <>
            <Navigator/>
            <BrowserBackTestContainer>
                <BrowserBackTestImgContainer>
                    <BrowserTextBox Width='30%' Height='20vh' FontSize='5rem' FontColor='white' Isbold={true} Justify="center" Align='center'>Back Test</BrowserTextBox>
                </BrowserBackTestImgContainer>
            </BrowserBackTestContainer>
            <BrowserTextBox Width='30%' Height='8vh' FontSize='2rem' FontColor='#374054' Isbold={true} Left="20%" Align='center'>백테스트</BrowserTextBox>
            <BrowserTextBox Width='50%' Height='5vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Left="20%">모델의 성능을 확인해보세요!</BrowserTextBox>
            <BrowserBackTestComponentContainer>
                <BrowserTextBox Width='100%' Height='8vh' FontSize='1.3rem' FontColor='#374054' Isbold={true} Align='center'>기본조건</BrowserTextBox>
                <BrowserBackTestSectionContainer>
                    <SelectBox Width='60%' Height='15vh'>
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
                    <SelectBox Width='35%' Height='15vh'>
                        <SelectBoxTop Color ="#F1F3F5">수수료율</SelectBoxTop>
                        <SelectBoxBottom>
                            <InputField min="0" max="5" placeholder="0.2" type= 'Number' step={0.1} onChange={handleChangeCommission} maxLength={3}></InputField>
                            <BrowserTextBox Width='10%' Height='' FontSize='1rem' FontColor='' Isbold={false} Justify="center">%</BrowserTextBox>
                        </SelectBoxBottom>
                        
                    </SelectBox>
                </BrowserBackTestSectionContainer>
                <BrowserTextBox Width='100%' Height='8vh' FontSize='1.3rem' FontColor='red' Isbold={true} Align='center'>매수조건</BrowserTextBox>
                <BrowserBackTestSectionContainer>
                    <SelectBox Width='60%' Height='15vh'>
                        <SelectBoxTop Color ="#FCECEC">종목군</SelectBoxTop>
                    </SelectBox>
                    <SelectBox Width='35%' Height='15vh'>
                        <SelectBoxTop Color ="#FCECEC">최대 보유종목 수</SelectBoxTop>
                    </SelectBox>
                </BrowserBackTestSectionContainer>
                <BrowserTextBox Width='100%' Height='8vh' FontSize='1.3rem' FontColor='#63A0FF' Isbold={true} Align='center'>매도조건</BrowserTextBox>
                <BrowserBackTestSectionContainer>
                    <SelectBox Width='60%' Height='15vh'>
                        <SelectBoxTop Color ="#E1F1F8">매도 가격 기준</SelectBoxTop>
                    </SelectBox>
                </BrowserBackTestSectionContainer>
            </BrowserBackTestComponentContainer>
        </>
    );
}

export default BrowserBackTestPage;