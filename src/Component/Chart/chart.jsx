import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title} </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="ActiveUser" stroke="#5550bd" />
          {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
