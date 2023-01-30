import { nextTick } from 'process';
import styled from 'styled-components';
import Navigator from '../../components/Navigator';
// import {useTable} from 'react-table';
import { PaginationTable } from '../../components/PaginationTable'
import {useEffect, useState} from 'react';
import { isClicked } from '../../atoms/ButtonAtom';
import { useRecoilState } from 'recoil';

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
    margin-right: 1rem;
    margin-top: 10vh;
`

// const currentTime = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/,'')
const current = new Date();
const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;

function BrowserTodaystockPage(){
    const [isClick, setIsClick] = useRecoilState(isClicked);
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
                        <RightSide>image to be updated...</RightSide>
                    ):(
                        <RightSide>Nah...</RightSide>
                    )}

                </StockContainer>     
            </BrowserTodaystockContainer>
        </>
    );
}

export default BrowserTodaystockPage;