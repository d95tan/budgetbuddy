import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ labels, values, color }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Overview",
      },
    },
  };




  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        data: values,
        borderColor: color,
        backgroundColor: color+"55",
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
