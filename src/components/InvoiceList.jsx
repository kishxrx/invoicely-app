import React from "react";

export default function InvoiceList({ invoices }) {
  const statusColor = {
    Paid: "bg-green-500",
    Overdue: "bg-orange-500",
    Awaited: "bg-yellow-500",
    Dispute: "bg-red-500",
    Draft: "bg-gray-500",
  };

  return (
    <div className="p-4">
      <h2 className="text-gray-800 font-bold mb-2">Invoices</h2>
      <ul>
        {invoices.map((inv) => (
          <li key={inv.id} className="flex justify-between p-3 mb-2 bg-white rounded shadow">
            <div>
              <p className="font-semibold">{inv.client}</p>
              <p className="text-sm text-gray-500">{inv.number} • Due {inv.due}</p>
            </div>
            <div className="flex items-center gap-2">
              <span>${inv.amount}</span>
              <span className={`px-2 py-1 text-xs rounded ${statusColor[inv.status] || "bg-gray-300"} text-white`}>
                {inv.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}