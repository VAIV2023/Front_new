import styled from "styled-components";
import MobileLoginBox from "../../components/MobileLoginBox";



const MobileLoginPageConatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

function MobileLoginPage(){
    return(
        <>      
            <MobileLoginPageConatiner>
                <MobileLoginBox/>
            </MobileLoginPageConatiner>
            
        </>
    )
}

export default MobileLoginPage;