import { Dot } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const BudgetingTips = () => {
    return (
        <div>
            <div>
                <h1 className="font-bold text-2xl px-4 my-5">Budgeting Tips</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">💰 1. Follow the 50/30/20 Rule</h1>
                    <ul className="space-y-2 px-4">
                        <li className="flex gap"><Dot />50% Needs: food, rent, transportation, bills</li>
                        <li className="flex gap"><Dot />30% Wants: outings, entertainment, shopping</li>
                        <li className="flex gap"><Dot />20% Savings: emergency fund, investment, future goals</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">📒 2. Track Every Expense</h1>
                    <ul className="space-y-2">
                        <li className="flex gap"><Dot />Use tools like Notion, Google Sheets, or budgeting apps (like Wallet, Money Manager, or Spendee).</li>
                        <li className="flex gap"><Dot />Even small daily spends (like snacks or rides) add up fast — record them.</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">🎯 3. Set Financial Goals</h1>
                    <ul className="space-y-2">
                        <li className="flex gap"><Dot />Short-term: Buy a new keyboard</li>
                        <li className="flex gap"><Dot />Mid-term: Build a PC upgrade fund</li>
                        <li className="flex gap"><Dot />Long-term: Emergency or investment savings</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">💳 4. Avoid Impulse Purchases</h1>
                    <ul className="space-y-2">
                        <h1>Ask yourself:</h1>
                        <p>“Do I need this or just want this right now?”</p>
                        <p className="border-l-3 border-gray-50 pl-2"> If it's a want, wait 48 hours before buying. Most times, you'll skip it.</p>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">🧾 5. Automate Savings</h1>
                    <ul className="space-y-2">
                        <p>If possible, transfer a fixed amount to a savings account (or bKash savings) right after you get money.  <br />  Treat savings like a “bill” that must be paid.</p>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">🧠 6. Analyze & Adjust Monthly</h1>
                    <ul className="space-y-2">
                        <h1>At the end of each month:</h1>
                        <li className="flex gap"><Dot />Check where you overspent</li>
                        <li className="flex gap"><Dot />Adjust next month's limits</li>
                        <li className="flex gap"><Dot />Identify habits to cut or improve</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">🛍️ 7. Use Cash or Prepaid Cards for Control</h1>
                    <ul className="space-y-2">
                        <li className="flex gap"><Dot />Paying in cash makes you more aware of spending.</li>
                        <li className="flex gap"><Dot />For online purchases, use a limited prepaid card balance — it prevents overspending.</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="border border-gray-100 shadow-xl m-4 p-4 rounded-xl bg-gray">
                    <h1 className="py-4 font-bold text-xl">⚡ 8. Build an Emergency Fund</h1>
                    <ul className="space-y-2">
                        <p className="px-4">Try to save at least 1-2 months of expenses for unexpected situations (medical, tech issues, etc.).</p>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default BudgetingTips
