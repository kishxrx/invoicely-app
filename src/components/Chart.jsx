import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Chart({ data }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold text-gray-800 mb-2">Income Trend</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#7C3AED" />
          <Line type="monotone" dataKey="growth" stroke="#10B981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}