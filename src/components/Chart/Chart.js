import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "./Chart.scss";

function Chart({ budgetLeft, entries }) {
  return (
    <PieChart
      colors={["#04D196", "#7633E3"]}
      series={[
        {
          data: [
            { id: 0, value: entries, label: "Entries" },
            { id: 1, value: budgetLeft, label: "Budget Left" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}

export default Chart;
