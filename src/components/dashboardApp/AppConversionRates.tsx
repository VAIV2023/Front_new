import PropTypes from "prop-types";
import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
// @mui
import { Box, Card, CardHeader } from "@mui/material";
// utils

import BaseOptionChart from "./BaseOptionChart";

// ----------------------------------------------------------------------

interface AppAppConversionRatesType {
  title: string;
  subheader: string;
  chartData: { label: string; value: number }[];
  [x: string]: any;
}

// export function fNumber(number: number) {
//   return numeral(number).format();
// }

export default function AppConversionRates({
  title,
  subheader,
  chartData,
  ...other
}: AppAppConversionRatesType) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        // formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => "",
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
