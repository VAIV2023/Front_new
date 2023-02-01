import styled from 'styled-components';
import Navigator from '../../components/Navigator';
import { PaginationTable } from '../../components/PaginationTable'
import React, {useEffect, useState} from 'react';
import { isClicked } from '../../atoms/ButtonAtom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { AuthKEY, EndPoint } from '../../data/KRX';
import BackGround from '../../assets/images/title_background.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleChart from '../../components/GoogleChart';


const BrowserTodaystockContainer = styled.div`
    height:100%;
    padding-top: 8vh;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-left: 2vw;
    margin-top: 1vw;
`

const KosButton = styled.button`
    /*공통 스타일*/
    // display: inline-flex;
    flex-direction: row;
    float:left;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 1rem;
    /*크기*/
    height: 2.25rem;
    width: 7rem;
    font-size: 1rem;
    /*색상 */
    background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }
    // /*기타 */
    // & + & {
    //     margin-left: 1rem;
    // }
`

const StockContainer = styled.div`
    display: flex;
`

const RightSide = styled.div`
    width: 35vw;
    padding-right: 1rem;
    margin-top: 10vh;
`

const SelectBoxBottom =styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;
`

const InputField = styled.input`
    display: flex;
    width: 20%;
    height: 30%;
    text-align: right;
`;

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

const BrowserBox = styled.div<IText>`
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

const current = new Date();
const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;


function BrowserTodaystockPage(){
    
    const [numOfStock, setnumOfStock] = useState<Number>(0);
    const [isClick, setIsClick] = useRecoilState(isClicked);

    const handleChangeNumOfStock = (e : any) => {
        const { value } = e.target;
        const onlyNumber = value.replace(/[^0-9]/g, '');
        setnumOfStock(onlyNumber);
    };
    
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        alert("Purchase completed")
    };

    interface ExampleObject {
        [key:string] : any
    }

    const [stock, setStock] = useState<ExampleObject[]>()
 
    useEffect(()=>{
        axios.get(EndPoint, {
            params:{
                serviceKey: `${AuthKEY}`,
                numOfRows: '10',
                pageNo: '1',
                resultType: 'json',
                itmsNm: '삼성전자'
            },
        }).then((res:any) => setStock(res.data.response.body.items.item))
    },[])
        
    if(stock){
        console.log(stock['0'].vs)
    }

    return(
        
        <>
            <Navigator/>
            <BrowserTodaystockContainer>
                <BrowserBackTestImgContainer>
                    <BrowserBox Width='30%' Height='20vh' FontSize='2.3rem' FontColor='black' Isbold={true} Justify="center" Align='center'>Today({date})'s Top Pick</BrowserBox>
                </BrowserBackTestImgContainer>

                <StockContainer>
                    <div>
                        <ButtonContainer>
                            <KosButton>KOSPI</KosButton>
                        </ButtonContainer>
                        <PaginationTable></PaginationTable>
                        <ButtonContainer>
                            <KosButton>KOSDAQ</KosButton>
                        </ButtonContainer>
                        <PaginationTable></PaginationTable>
                    </div>
                    
                    {isClick?(
                        <RightSide>
                            {/* <ImageContainer src={samsung}/> */}
                            <GoogleChart></GoogleChart>
                            <StockContainer>
                                <SelectBoxBottom>
                                    <InputField min="0" max="99" placeholder="0" type= 'Number' onChange={handleChangeNumOfStock} maxLength={2}></InputField>
                                    <BrowserTextBox Width='15%' Height=' ' FontSize='1rem' FontColor='' Isbold={false} Justify="right" Left=' '>주</BrowserTextBox>
                                </SelectBoxBottom>
                                <KosButton onClick={buttonHandler}>BUY</KosButton>
                            </StockContainer>
                            
                        </RightSide>
                    ):(
                        <RightSide>Nah...</RightSide>
                    )}

                </StockContainer>     
            </BrowserTodaystockContainer>
            
        </>
    );
}

export default BrowserTodaystockPage;