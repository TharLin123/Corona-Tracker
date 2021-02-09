import React,{ useState, useEffect } from 'react';
import { fetchDailyData } from '../api/fetchData';
import { Line, Bar } from 'react-chartjs-2';

function Chart({ confirmed,recovered,deaths,country }) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        fetchDailyData().then(data => {
            setDailyData(data)
        })
    },[setDailyData])
    
    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toDateString()),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },  {
                data: dailyData.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
    if (country && country !=='global') {
      return (
        <div>
            {barChart}
        </div>
      )
    } else {
      return (
        <div>
            {lineChart}
        </div>
      )
    }
}

export default Chart
