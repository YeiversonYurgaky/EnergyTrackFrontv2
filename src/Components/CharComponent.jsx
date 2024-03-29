import ApexCharts from 'apexcharts';
import React, { useEffect, useRef } from 'react';
import "../Styles/Chars.css";

const ChartComponent = ({ options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [options]);

  return (
    <div className='grid'>
      <div className='shadow-md p-2' ref={chartRef}>
        Cargando Gráfica...
      </div>
    </div>
  );
};

export default ChartComponent;
