import { useState } from "react";
import Chart from "react-apexcharts";
import UseData from "../../data/useData";

const Donutchart = () => {
  const { location } = UseData();

  const countries = location?.map((c) => `${c.country} ${c.percent}%`);

  const numbers = location?.map((num) => num.count);

  console.log(numbers, "label");
  const options = {
    chart: {
      id: "donut",
      size: "70%",
    },
    labels: countries,

    name: {
      show: true,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "left",
      fontSize: "14px",
      fontWeight: "bold",
      offsetX: -50,
      offsetY: 0,
      markers: {
        offsetX: 148,
        offsetY: 0,
      },
    },
    // responsive: {},

    colors: ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"],
  };

  return (
    <div className="mt-6">
      <Chart
        options={options}
        series={numbers}
        width="365"
        // height="400"
        type="donut"
      />
    </div>
  );
};

export default Donutchart;
