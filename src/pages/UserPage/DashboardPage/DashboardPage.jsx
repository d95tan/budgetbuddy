import { useOutletContext } from "react-router-dom";
import Graph from "../../../components/Graphs/Graph";
import "./DashboardPage.css";
import DashboardNumbers from "../../../components/DashboardNumbers/DashboardNumbers";

export default function DashboardPage() {
  const [logs, setLogs] = useOutletContext();

  const reversedLogs = structuredClone(logs);
  reversedLogs.reverse();

  const labels = [];
  const totals = [];
  const totalSavings = [];
  const totalInvestments = [];
  for (const log of reversedLogs) {
    labels.push(log.date);
    totals.push(log.total);
    totalSavings.push(log.totalSavings);
    totalInvestments.push(log.totalInvestments);
  }

  return (
    <>
      <h1>Dashboard Page</h1>
      <div className="dashboard-container">
        <div className="dashboard-left-container">
          <div className="dashboard-top-left-container">
            <Graph labels={labels} values={totals} color={"#000000"} />
            <DashboardNumbers logs={logs} />
          </div>
          <p>TableTableTableTableTable</p>
        </div>
        <div className="dashboard-small-graphs">
          <Graph labels={labels} values={totalInvestments} color={"#39B54A"} />
          <Graph labels={labels} values={totalSavings} color={"#76b6dd"} />
        </div>
      </div>
    </>
  );
}
