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
    title: "Simulate / 시뮬레이션",
    path: "/manage/:clubID/recruit",
    icon: getIcon("material-symbols:data-thresholding-outline-rounded"),
  },
  {
    title: "Account / 계좌관리",
    path: "/manage/:clubID/accountBook",
    icon: getIcon("fa-solid:money-check-alt"),
  },
];

export default PortnavConfig;
