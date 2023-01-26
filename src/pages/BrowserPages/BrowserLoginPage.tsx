import styled from "styled-components";
import LoginBox from "../../components/LoginBox";



const LoginPageConatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function LoginPage(){
    return(
        <>      
            <LoginPageConatiner>
                <LoginBox/>
            </LoginPageConatiner>
            
        </>
    )
}

export default LoginPage;