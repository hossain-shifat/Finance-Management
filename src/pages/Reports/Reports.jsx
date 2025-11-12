import React from 'react'
import CategoryPie from '../../components/Charts/CategoryPie/CategoryPie'
import MonthlyTotalsChart from '../../components/Charts/MonthBarChart/MonthBarChart'

const Reports = () => {

    return (
        <div>
            <div className="py-10">
                <h1 className="text-2xl font-bold">Expence Comparison</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between *:w-full gap-2">
                <CategoryPie />
                <MonthlyTotalsChart />
            </div>
        </div>
    )
}

export default Reports
