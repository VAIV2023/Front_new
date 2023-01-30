import { nextTick } from 'process';
import styled from 'styled-components';
import Navigator from '../../components/Navigator';
// import {useTable} from 'react-table';
import { PaginationTable } from '../../components/PaginationTable'
import {useEffect, useState} from 'react';
import { isClicked } from '../../atoms/ButtonAtom';
import { useRecoilState } from 'recoil';
import samsung from "../../samsung.png"

const BrowserTodaystockContainer = styled.div`
    height:100%;
    padding-top: 12vh;
`

const BuyCommentContainer = styled.div`
    width: 60vw;
    height: 10vh;
    border-radius: 15px;
    color: #0000FF;
    border: 3px solid blue;
    justify-content: center;
    background-color: blue;
    text-align: center;
    display: flex;
    margin-left: 2vw;
    padding: 0;
`

const MarketChoice = styled.p`
    color: black;
    font-size:1rem;
    font-weight: bold;
    margin-right: 0.5rem;
    line-height: 2.25rem;
    justify-content: center;
`

const BuyComment = styled.p`
    color: white;
    text-align: center;
    line-height: 10vh;
    font-size: 3rem;
    font-weight: bold;
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

const ImageContainer  = styled.img`
    height: auto;
    max-width: 100%;
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

// const currentTime = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/,'')
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

    return(
        <>
            <Navigator/>
            <BrowserTodaystockContainer>
                <BuyCommentContainer>
                    <BuyComment>Today({date})'s Top Pick</BuyComment>
                </BuyCommentContainer>
                
                <StockContainer>
                    <div>
                        <ButtonContainer>
                            {/* <KosButton onClick={() => setCheck(true)}>KOSPI</KosButton> */}
                            {/* <KosButton onClick={() => setCheck(false)}>KOSDAQ</KosButton> */}
                            {/* <MarketChoice>Market Select:</MarketChoice> */}
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
                            <ImageContainer src={samsung}/>
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