import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Stock Name", "Ticker No.", "Previous Day Closing Price", "Day to Day ratio", "Fluctuation rate"],
];

export const options = {
  allowHtml: true,
  showRowNumber: true,
};

export const formatters = [
  {
    type: "ArrowFormat" as const,
    column: 1,
  },
];

export function TableHeadRow() {
  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
      formatters={formatters}
    />
  );
}
