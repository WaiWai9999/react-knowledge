import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { AllSeriesType } from "@mui/x-charts/models";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

const series = [
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [2, 5, 3, 4, 1],
  },
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [5, 6, 2, 8, 9],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "red",
    data: [1000, 1500, 3000, 5000, 10000],
  },
] as AllSeriesType[];

export default function MuiChart() {
  return (
    <div>
      <BarChart
      
        xAxis={[
          {
            id: "barCategories",
            data: ["2021", "2022", "2023"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [200, 300, 500],
          },
        ]}
        width={500}
        height={300}
      />
      <ChartContainer
        series={series}
        width={500}
        height={400}
        xAxis={[
          {
            id: "years",
            data: [2010, 2011, 2012, 2013, 2014],
            scaleType: "band",
            valueFormatter: (value) => value.toString(),
          },
        ]}
        yAxis={[
          {
            id: "eco",
            scaleType: "linear",
          },
          {
            id: "pib",
            scaleType: "log",
          },
        ]}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis label="Years" position="bottom" axisId="years" />
        <ChartsYAxis label="Results" position="left" axisId="eco" />
        <ChartsYAxis label="PIB" position="right" axisId="pib" />
      </ChartContainer>
    </div>
  );
}
