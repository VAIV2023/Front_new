import styled from 'styled-components';
import Navigator from '../../components/Navigator';
import BackGround from '../../assets/images/SectionImg5.png';

const BrowserAboutContainer = styled.div`
    padding-top: 8vh;
    background-color: white;
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

function BrowserAboutPage(){
    return(
        <>
            <Navigator/>
            <BrowserAboutContainer>
                <BrowserBackTestImgContainer>
                    <BrowserTextBox Width='30%' Height='20vh' FontSize='5rem' FontColor='white' Isbold={true} Justify="center" Align='center'>How to Use</BrowserTextBox>
                </BrowserBackTestImgContainer>
                
            </BrowserAboutContainer>
        </>
    );
}

export default BrowserAboutPage;