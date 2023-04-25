import React from "react";
import Chart from "react-apexcharts";
import UseDatas from "../../data/UseDatas";

const Piechart = () => {
  const { sources } = UseDatas();

  const source = sources?.map((c) => `${c.source} ${c.percent}%`);

  const numbers = sources?.map((num) => num.count);

  const options = {
    chart: {
      id: "donut",
    },
    labels: source,

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
      fontWeight: "700",
      offsetX: -50,
      offsetY: 0,
      markers: {
        offsetX: 116,
        offsetY: 0,
      },
    },

    colors: ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"],
  };

  return (
    <div className="mt-6">
      <Chart
        options={options}
        series={numbers}
        width="336"
        // height="400"
        type="donut"
      />
    </div>
  );
};

export default Piechart;
