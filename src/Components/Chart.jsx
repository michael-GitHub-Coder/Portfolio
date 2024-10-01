import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ names = [], percentages = [] }) => {
  const data = {
    labels: names,  // These labels are now only for tooltips, not shown as headings
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

  const options = {
    plugins: {
      legend: {
        display: false, // This hides the default chart legend
      },
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Custom Headings */}
      <div className="headings-container" style={{ display: 'flex',gap:'20px', justifyContent: 'space-around', width: '100%', marginBottom: '20px' }}>
        {names.map((name, index) => (
          <div key={index} className="heading-item" style={{ textAlign: 'center' }}>
            <span>{name}</span>
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: data.datasets[0].backgroundColor[index],
                margin: '5px auto',
                borderRadius: '50%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Pie Chart with 200px width */}
      <div style={{ width: '150px', height: '150px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
