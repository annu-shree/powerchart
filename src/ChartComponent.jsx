import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const chartNode = chartRef.current;
    const powerData = data.reduce((acc, { name, time, power }) => {
      const buildingData = acc[name] || { labels: [], data: [] };
      buildingData.labels.push(time);
      buildingData.data.push(power);
      acc[name] = buildingData;
      return acc;
    }, {});

    const chartData = {
      datasets: Object.entries(powerData).map(([name, buildingData]) => ({
        label: name,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        data: buildingData.data,
      })),
      labels: Object.values(powerData)[0].labels,
    };

    const chartOptions = {
      responsive: true,
      legend: {
        position: "top",
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    const myChart = new Chart(chartNode, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export default ChartComponent;
