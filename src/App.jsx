import React, { useMemo } from "react";
import Header from "./components/Header";
import CreateInvoice from "./components/CreateInvoice";
import KpiCard from "./components/KpiCard";
import Chart from "./components/Chart";
import InvoiceList from "./components/InvoiceList";
import { invoices } from "./data/mockData";

export default function App() {
  // Calculate KPIs
  const totalEarnings = useMemo(
    () => invoices.filter(i => i.status === "Paid").reduce((a, b) => a + b.amount, 0),
    []
  );
  const paymentAwaited = useMemo(
    () =>
      invoices
        .filter(i => i.status === "Awaited" || i.status === "Partially Paid")
        .reduce((a, b) => a + b.amount, 0),
    []
  );
  const paymentOverdue = useMemo(
    () => invoices.filter(i => i.status === "Overdue").reduce((a, b) => a + b.amount, 0),
    []
  );

  // Build monthly income trend
  const chartData = useMemo(() => {
    const months = {};
    invoices.forEach(inv => {
      const month = new Date(inv.due).toLocaleString("default", { month: "short" });
      if (!months[month]) months[month] = { month, Paid: 0, Awaited: 0, Overdue: 0 };
      months[month][inv.status] = (months[month][inv.status] || 0) + inv.amount;
    });
    return Object.values(months);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-800 flex flex-col">
      <Header />

      <main className="flex-1 p-3 space-y-6">
        <CreateInvoice />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KpiCard title="Total Earnings" value={`₹${totalEarnings}`} color="bg-purple-600" />
          <KpiCard title="Payment Awaited" value={`₹${paymentAwaited}`} color="bg-yellow-500" />
          <KpiCard title="Payment Overdue" value={`₹${paymentOverdue}`} color="bg-orange-500" />
        </div>

        <div className="mt-2 bg-white rounded-2xl p-4 shadow" style={{ minheight: 250}}>
          <Chart data={chartData} />
        </div>

        <InvoiceList invoices={invoices} />
      </main>

      <footer className="text-center text-gray-400 text-xs py-4">
        invoicely – sparking the creator economy
      </footer>
    </div>
  );
}