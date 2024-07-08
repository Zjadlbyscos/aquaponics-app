import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const HistoricalDataChart = ({ moduleId }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const [start, setStart] = useState('');
  const [stop, setStop] = useState('');
  const [mode, setMode] = useState('hourly');

  useEffect(() => {
    if (start && stop && mode) {
      axios.get(`http://localhost:3001/modules/${moduleId}/history`, {
        params: { start, stop, mode }
      }).then(response => {
        setHistoricalData(response.data);
      });
    }
  }, [moduleId, start, stop, mode]);

  const data = {
    labels: historicalData.map(entry => new Date(entry.timestamp).toLocaleString()),
    datasets: [{
      label: 'Temperature',
      data: historicalData.map(entry => entry.temperature),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div>
      <h2>Historical Data</h2>
      <label>
        Start:
        <input type="datetime-local" value={start} onChange={e => setStart(e.target.value)} />
      </label>
      <label>
        Stop:
        <input type="datetime-local" value={stop} onChange={e => setStop(e.target.value)} />
      </label>
      <label>
        Mode:
        <select value={mode} onChange={e => setMode(e.target.value)}>
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
        </select>
      </label>
      <Line data={data} />
    </div>
  );
};

export default HistoricalDataChart;
