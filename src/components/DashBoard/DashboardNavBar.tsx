import { alpha, styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import Iconify from "../Iconify";
import { useRecoilState} from "recoil";
import { isLoggedInState } from "../../atoms/LoginAtom";
import { useNavigate } from "react-router-dom";


const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

interface IDashboardNavBar {
  isAdmin: boolean;
  onOpenSidebar(): void;
}
function DashboardNavBar({ isAdmin, onOpenSidebar }: IDashboardNavBar) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  function handleKakaoLogOut() {
    if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
            url: "/v1/user/unlink",
            success(res: any) {
                setIsLoggedIn(false);
                alert("로그아웃 되었습니다");
                console.log(res);

                /* 로컬스토리지 삭제 */
                localStorage.removeItem("id");
                localStorage.removeItem("nickname");
                //localStorage.removeItem("account_list");
                //localStorage.removeItem("stock_info");
            },
            fail(error: any) {
            console.log(error);
            },
        });
        window.Kakao.Auth.setAccessToken(undefined);
    }else{
        setIsLoggedIn(false);
        localStorage.removeItem("id");
        localStorage.removeItem("nickname");
        alert("로그아웃 되었습니다");
    }
    navigate("/");
  };

  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: "text.primary", display: { lg: "none" }, }}
        >
          <Iconify icon="ic:round-menu"/>
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          sx={{color:"#2828297a"}}>
            {isLoggedIn? 
              <div onClick={handleKakaoLogOut}>로그아웃</div>
              :
              <div onClick={()=>navigate("/login")}>로그인</div>}
        </Stack>

      </ToolbarStyle>
    </RootStyle>
  );
}

export default DashboardNavBar;
