'use client';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import { salesChartData } from "@/data/sell";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

const Graph = () => {
  const options ={}

  return (
    <div>
      <Line options={options} data={salesChartData}  />
    </div>
  );
};

export default Graph;
