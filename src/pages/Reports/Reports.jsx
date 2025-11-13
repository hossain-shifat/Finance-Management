import React from 'react'
import CategoryPie from '../../components/Charts/CategoryPie/CategoryPie'
import MonthlyTotalsChart from '../../components/Charts/MonthBarChart/MonthBarChart'

const Reports = () => {

    return (
        <div>
            <div className="py-10">
                <h1 className="text-2xl font-bold pl-4">Expence Comparison</h1>
            </div>
            <div className="*:my-5 mx-4">
                <MonthlyTotalsChart />
                <CategoryPie />
            </div>
        </div>
    )
}

export default Reports
