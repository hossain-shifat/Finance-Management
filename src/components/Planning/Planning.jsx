import React from 'react'

const Planning = () => {
    return (
        <div className="my-10">
            <h1 className="font-bold text-2xl my-5 pl-4">Why Financial Planning Matters</h1>
            <div className="space-y-3 mx-4 *:border *:border-white-100 *:shadow-sm">

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">Sets Clear Financial Goals</div>
                    <div className="collapse-content text-sm">Helps you define what you want to achieve, like buying a home, saving for education, or preparing for retirement.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Prepares for Emergencies –</div>
                    <div className="collapse-content text-sm">Ensures you have funds set aside for unexpected expenses such as medical emergencies or job loss.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Controls Spending and Encourages Saving</div>
                    <div className="collapse-content text-sm">Helps prioritize needs over wants, avoid unnecessary debt, and save consistently.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Maximizes Wealth and Investments</div>
                    <div className="collapse-content text-sm">Guides smart investment decisions and helps your money grow over time.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Ensures Financial Security for Family</div>
                    <div className="collapse-content text-sm">Includes insurance and estate planning to protect your loved ones in unforeseen events.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Reduces Stress and Improves Decision-Making</div>
                    <div className="collapse-content text-sm">Provides a clear roadmap for finances, giving peace of mind and confidence in financial choices.</div>
                </div>
            </div>
        </div>
    )
}

export default Planning
