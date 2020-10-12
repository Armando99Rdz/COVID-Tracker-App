import React, { useState, useEffect } from'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import ClipLoader from "react-spinners/ClipLoader";

import styles from './Chart.module.css';

const Chart = () => {

  const [ dailyData, setDailyData ] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchAPI();
  });

  const lineChart = (
    //dailyData || dailyData.length
    false
    ? (
      <Line 
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infectados',
            borderColor: '#3333ff',
            fill: true
          }, {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Muertes',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
          }]
        }} 
      />
      )
    : <ClipLoader size={40} color={"#123abc"} loading={true} />
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;