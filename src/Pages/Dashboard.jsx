import React from 'react'
import ConsumptionGraphs from '../Components/ConsumptionGraphs'
import NavDashboard from '../Components/NavDashboard'

const Dashboard = () => {
  return (
    <>
      <div>
        <NavDashboard />
      </div>
      <div>
        <ConsumptionGraphs />
      </div>
    </>
  )
}

export default Dashboard