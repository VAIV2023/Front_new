import styled from 'styled-components';
import Navigator from '../../components/Navigator';

const BrowserPortpolioContainer = styled.div`
    height:100%;
    padding-top: 12vh;
`
const BuyCommentContainer = styled.div`
    width: 40vw;
    height: 10vh;
    border-radius: 15px;
    color: #0000FF;
    border: 3px solid green;
    // justify-content: center;
    background-color: green;
    text-align: center;
    display: flex;
    margin:auto;
    padding: 0;
    justify-content: center;
`
const Title = styled.p`
    color: white;
    text-align: center;
    line-height: 10vh;
    font-size: 3rem;
    font-weight: bold;
`

function BrowserPortpolioPage(){
    return(
        <>
            <Navigator/>
            <BrowserPortpolioContainer>
                <BuyCommentContainer>
                    <Title>My Portfolio</Title>
                </BuyCommentContainer>
                <div>
                    <div>User id: 123123123</div>
                    <div>현재계좌</div>
                </div>
                
                <button>simulate</button>
                <button>rebalancing</button>
            </BrowserPortpolioContainer>
        </>
    );
}

export default BrowserPortpolioPage;