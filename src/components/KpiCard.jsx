import React from "react";

export default function KpiCard({ title, value, color }) {
  return (
    <div className={`p-2 mb-4 rounded-lg shadow ${color}`}>
      <h2 className="text-gray-200 text-xs">{title}</h2>
      <p className="text-white text-lg font-bold">{value}</p>
    </div>
  );
}