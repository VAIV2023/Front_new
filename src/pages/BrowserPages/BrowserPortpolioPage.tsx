import styled from 'styled-components';
import Navigator from '../../components/Navigator';

const BrowserPortpolioContainer = styled.div`
    height:100%;
    padding-top: 12vh;
`

function BrowserPortpolioPage(){
    return(
        <>
            <Navigator/>
            <BrowserPortpolioContainer>
            </BrowserPortpolioContainer>
        </>
    );
}

export default BrowserPortpolioPage;