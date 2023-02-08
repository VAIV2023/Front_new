import ReactApexChart from "react-apexcharts";

interface BooleanColumnChartType {
  series: number[];
  labels: string[];
}
function BooleanColumnChart({ series, labels }: BooleanColumnChartType) {
  const chartOption = {
    series,
    options: {
      chart: {
        width: 450,
        type: "pie",
      },
      labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <ReactApexChart
      options={chartOption.options as any}
      series={chartOption.series}
      type="pie"
      width={450}
    />
  );
}

export default BooleanColumnChart;
