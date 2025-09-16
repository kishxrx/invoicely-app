import React from "react";
import Header from "./components/Header";
import CreateInvoice from "./components/CreateInvoice";
import KpiCard from "./components/KpiCard";
import Chart from "./components/Chart";
import InvoiceList from "./components/InvoiceList";
import { invoices, chartData } from "./data/mockData";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-800 flex flex-col">
      {/* Top gradient header */}
      <Header />

      <main className="flex-1 p-4 space-y-6">
        {/* Create New Invoice card */}
        <CreateInvoice />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KpiCard
            title="Total Earnings"
            value="₹1,25,000"
            bg="bg-white"
            color="text-purple-600"
          />
          <KpiCard
            title="Payment Awaited"
            value="₹25,000"
            bg="bg-white"
            color="text-yellow-600"
          />
          <KpiCard
            title="Payment Overdue"
            value="₹25,000"
            bg="bg-white"
            color="text-orange-600"
          />
        </div>

        {/* Income Trend Chart */}
        <div className="bg-white rounded-2xl p-4 shadow">
          <Chart data={chartData} />
        </div>

        {/* Invoice List */}
        <InvoiceList invoices={invoices} />
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-xs py-4">
        Sparkonomy – sparking the creator economy
      </footer>
    </div>
  );
}