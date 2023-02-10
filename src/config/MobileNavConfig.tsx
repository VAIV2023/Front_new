// component

import Iconify from "../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <Iconify icon={name} width={22} height={22} />
);

const MobileNavConfig = [
  
  {
    title: "About / 사용방법",
    path: "/about",
    icon: getIcon("mdi:about-circle-outline"),
  },
  {
    title: "Today's Pick / 오늘의 종목",
    path: "/todaystock",
    icon: getIcon("material-symbols:fact-check-outline-rounded"),
  },
  {
    title: "BackTest / 백테스트",
    path: "/backtest",
    icon: getIcon("simple-line-icons:magnifier"),
  },
  {
    title: "Dashboard / 대시보드",
    path: "/dashboard",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Transaction / 매매관리",
    path: "/transaction",
    icon: getIcon("material-symbols:data-thresholding-outline-rounded"),
  },
  {
    title: "Account / 계좌관리",
    path: "/account",
    icon: getIcon("fa-solid:money-check-alt"),
  },
];

export default MobileNavConfig;
