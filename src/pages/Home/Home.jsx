import React from 'react'
import Banner from '../../components/Banner/Banner'
import BudgetingTips from '../../components/BudgetingTips/BudgetingTips'
import Planning from '../../components/Planning/Planning'
import Overview from '../../components/Overview/Overview'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Overview/>
      <BudgetingTips/>
      <Planning/>
    </div>
  )
}

export default Home
