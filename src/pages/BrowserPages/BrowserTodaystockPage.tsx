import styled from 'styled-components';
import Navigator from '../../components/Navigator';

const BrowserTodaystockContainer = styled.div`
    height:100%;
    padding-top: 12vh;
`

function BrowserTodaystockPage(){
    return(
        <>
            <Navigator/>
            <BrowserTodaystockContainer>
            </BrowserTodaystockContainer>
        </>
    );
}

export default BrowserTodaystockPage;