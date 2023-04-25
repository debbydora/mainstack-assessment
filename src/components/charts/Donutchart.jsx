import { useState } from "react";
import Chart from "react-apexcharts";
import UseDatas from "../../data/UseDatas";

const Donutchart = () => {
  const { location } = UseDatas();

  const countries = location?.map((c) => `${c.country} ${c.percent}%`);

  const numbers = location?.map((num) => num.count);

  console.log(numbers, "label");
  const options = {
    chart: {
      id: "donut",
      // size: "70%",
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
      // offsetY: -20,
      markers: {
        offsetX: 150,
        offsetY: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          legend: {
            position: "left",
            offsetX: -30,
            fontSize: "10px",
            fontWeight: "bold",
            offsetY: 0,
            markers: {
              offsetX: 0,
              offsetY: 0,
            },
          },
          chart: {
            id: "donut",
            width: "323",
          },
        },
      },
    ],
    colors: ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"],
  };

  return (
    <div className="mt-6">
      <Chart
        options={options}
        series={numbers}
        width="380"
        height="400"
        type="donut"
      />
    </div>
  );
};

export default Donutchart;
