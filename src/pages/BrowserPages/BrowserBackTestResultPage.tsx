import styled from "styled-components";
import Navigator from '../../components/Navigator';

const BrowserBackTestResultContainer = styled.div`
    display: flex;
    padding-top: 8vh;
    background-color: aliceblue;
`




function BrowserBackTestResultPage(){
    return(
        <>
            <Navigator></Navigator>
            <BrowserBackTestResultContainer></BrowserBackTestResultContainer>
        </>
    );
}

export default BrowserBackTestResultPage;