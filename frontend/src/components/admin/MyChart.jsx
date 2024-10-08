// MyChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const MyChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(9, 196, 163)',
        borderColor: 'rgb(6, 145, 120)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Monthly Sales Data',
        },
    },
    maintainAspectRatio: false, // Add this line to set the height
};

  return (
      <Line data={data} options={options} />
  );
};

export default MyChart;
