import React from 'react';
import ChartComponent from './CharComponent';
const ConsumptionGraphs = () => {

  //Diarios
  const options1 = {
    series: [
      {
        name: "Consumo - 2024",
        data: [100, 95, 105, 98, 110, 120, 115]
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#000000'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Diarios',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
      title: {
        text: 'Días'
      }
    },
    yaxis: {
      title: {
        text: ' kilovatio hora (kwh)'
      },
      min: 60,
      max: 140
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };
  //Semanales
  const options2 = {
    series: [
      {
        name: "Consumo - 2024",
        data: [743, 790, 825, 825]
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#2563EB'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Semanales',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
      title: {
        text: 'Semanas'
      }
    },
    yaxis: {
      title: {
        text: ' kilovatio hora (kwh)'
      },
      min: 600,
      max: 1200
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };
  //Mensual
  const options3 = {
    series: [
      {
        name: "Consumo - 2024",
        data: [3200, 3300, 3500, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#27AB03'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Mensuales',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      title: {
        text: 'Meses'
      }
    },
    yaxis: {
      title: {
        text: ' kilovatio hora (kwh)'
      },
      min: 1800,
      max: 4100
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  return (
    <main className='grid items-center'>
      <div className='grid justify-center'>
        <header className='grid justify-center p-5 prose lg:prose-xl'>
          <h1 className='self-center'>Consumos</h1>
        </header>
      </div>
      <section className='p-10 grid grid-cols-2 grid-rows-2 gap-8'>
        <ChartComponent options={options1} />
        <ChartComponent options={options2} />
        <ChartComponent options={options3} />
      </section>
    </main>
  )
}

export default ConsumptionGraphs