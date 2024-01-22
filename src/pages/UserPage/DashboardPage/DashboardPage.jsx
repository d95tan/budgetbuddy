import { useOutletContext } from "react-router-dom";
import Graph from "../../../components/Graphs/Graph";

export default function DashboardPage() {
  const [logs, setLogs] = useOutletContext();
  return (
    <>
      <h1>Dashboard Page</h1>
      <Graph logs={logs} />
    </>
  );
}
