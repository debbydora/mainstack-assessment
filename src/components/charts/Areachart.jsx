import Chart from "react-apexcharts";
import UseData from "../../data/useData";

const AreaChart = () => {
  const { graphData } = UseData();

  const dates = Object.keys(graphData);
  const dataValues = Object.values(graphData);

  const options = {
    chart: {
      id: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      type: "datetime",
      categories: dates,
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: [],
          fontSize: "12px",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeUTC: true,
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },

    colors: ["#FF5403"],

    yaxis: {
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
    },

    grid: {
      borderColor: "#DBDEE5",
      strokeDashArray: 7,
    },
  };
  const series = [
    // data on the y-axis
    {
      data: dataValues,
    },
  ];

  return (
    <div className="mt-6">
      <Chart
        options={options}
        series={series}
        height="320"
        // width="100"
        type="area"
      />
    </div>
  );
};

export default AreaChart;
