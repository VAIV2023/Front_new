import styled from 'styled-components';

const SectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-color: #63A0FF;
`


interface IText{
    FontSize: string;
    FontColor: string;
    Width: string;
    Height: string;
    Isbold: boolean;
    Align: boolean;
}

const BrowserTextBox = styled.div<IText>`
    display:flex;
    width:${(props) => props.Width};
    height:${(props) => props.Height};
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.Isbold ? "bold" : ""};
    color: ${(props) => props.FontColor};
    justify-content: center;
    align-items: ${(props) => props.Align ? "center" : ""};
`




function BrowserMainsectionFive(){
    return(
        <SectionContainer></SectionContainer>
    );
}

export default BrowserMainsectionFive;