import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



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
    justify-content: center;
`
const SectionInfoComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 20vh;
`


const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 15vh;
    justify-content: center;
    align-items: center;
    
`
interface IBotton{
    MarginL?:string;
    MarginR?:string;
    Color : string;
}

const SectionButton = styled.button<IBotton>`
    display:flex;
    background-color: white;
    width: 13%;
    height: 8vh;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.Color};
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 1rem;
    border: 2px solid ${(props) => props.Color};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    margin-left: ${(props)=> props.MarginL};
    margin-right: ${(props)=> props.MarginR};

    &:hover {
        color:white;
        background-color: ${(props) => props.Color};
        cursor: pointer;
    }


`

function BrowserMainsectionFour(){
    const navigate = useNavigate();

    function handleClick(index: number){
        if(index === 0){
            navigate("/about");
        }
        if(index === 1){
            navigate("/portpolio");
        }

    }

    return(
        <SectionContainer>
            <SectionWrapper>
                <SectionTitleWrapper>
                    <BrowserTextBox Width='50%' Height='10vh' FontSize='1.5rem' FontColor='' Isbold={false} Justify ="right" Align='center'>"Easy to Use"</BrowserTextBox>
                    <BrowserTextBox Width='50%' Height='10vh' FontSize='1.5rem' FontColor='#63A0FF' Isbold={true} Justify ="left" Margin = "1vw" Align='center'>SUKKUNT</BrowserTextBox>
                </SectionTitleWrapper>
                <SectionInfoWrapper>
                    <SectionInfoComponent>
                        <BrowserTextBox Width='100%' Height='6vh' FontSize='1.2rem' FontColor='#374054' Isbold={true} Justify ="center" Align='center'>자동 매매</BrowserTextBox>
                        <BrowserTextBox Width='100%' Height='14vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Justify ="center" Align="left" LineHeight = "2rem">사용자 개입이 없는 <br/> 완벽한 자동화 매매 지원</BrowserTextBox>
                    </SectionInfoComponent>
                    <SectionInfoComponent>
                        <BrowserTextBox Width='100%' Height='6vh' FontSize='1.2rem' FontColor='#374054' Isbold={true} Justify ="center" Align='center'>전략적 매매</BrowserTextBox>
                        <BrowserTextBox Width='100%' Height='14vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Justify ="center" Align='' LineHeight = "2rem">필요에 따라,<br/> 매매에 사용자가 개입가능</BrowserTextBox>
                    </SectionInfoComponent>
                    <SectionInfoComponent>
                        <BrowserTextBox Width='100%' Height='6vh' FontSize='1.2rem' FontColor='#374054' Isbold={true} Justify ="center" Align='center'>리밸런싱</BrowserTextBox>
                        <BrowserTextBox Width='100%' Height='14vh' FontSize='1rem' FontColor='#555555f0' Isbold={true} Justify ="center" Align='' LineHeight = "2rem">비율조정이 가능한 <br/> 리밸런싱 기능 지원</BrowserTextBox>
                    </SectionInfoComponent>
                </SectionInfoWrapper>
                <ButtonWrapper>
                    <SectionButton MarginR = "5%" Color ="#63A0FF" onClick={()=> handleClick(0)}>사용 방법</SectionButton>
                    <SectionButton MarginL = "5%" Color = "#093687" onClick={()=> handleClick(1)}>포트폴리오</SectionButton>
                </ButtonWrapper>
            </SectionWrapper>
        </SectionContainer>
    );
}

export default BrowserMainsectionFour;