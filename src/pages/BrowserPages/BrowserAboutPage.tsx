import styled from 'styled-components';
import Navigator from '../../components/Navigator';

const BrowserAboutContainer = styled.div`
    height:100%;
    padding-top: 12vh;
`



function BrowserAboutPage(){
    return(
        <>
            <Navigator/>
            <BrowserAboutContainer></BrowserAboutContainer>
        </>
    );
}

export default BrowserAboutPage;