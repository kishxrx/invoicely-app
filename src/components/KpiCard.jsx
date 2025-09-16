import React from "react";

export default function KpiCard({ title, value, color }) {
  return (
    <div className={`p-4 rounded-lg shadow ${color}`}>
      <h2 className="text-gray-200 text-sm">{title}</h2>
      <p className="text-white text-xl font-bold">{value}</p>
    </div>
  );
}