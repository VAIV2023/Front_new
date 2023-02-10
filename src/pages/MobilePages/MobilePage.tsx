import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import DashboardNavBar from "../../components/DashBoard/DashboardNavBar";
import DashboardSidebar from "../../components/DashBoard/MobileDashboardSideBar";
import { useQuery } from "react-query";


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE ,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function MobilePage() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavBar isAdmin={false} onOpenSidebar={() => setOpen(true)} /> 
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
export default MobilePage;