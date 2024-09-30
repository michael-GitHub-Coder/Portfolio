import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ names = [], percentages = [] }) => {
  const data = {
    labels: names,
    datasets: [
      {
        label: 'Percentage',
        data: percentages,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF5722',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF5722',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '200px', margin: '0 auto' }}>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
