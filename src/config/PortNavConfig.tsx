// component

import Iconify from "../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <Iconify icon={name} width={22} height={22} />
);

const PortnavConfig = [
  {
    title: "Dashboard / 메인화면",
    path: "/portpolio/main",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Transaction / 매매관리",
    path: "/portpolio/transaction",
    icon: getIcon("material-symbols:data-thresholding-outline-rounded"),
  },
  {
    title: "Account / 계좌관리",
    path: "/portpolio/account",
    icon: getIcon("fa-solid:money-check-alt"),
  },
];

export default PortnavConfig;
