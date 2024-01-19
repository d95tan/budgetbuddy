import { useOutletContext } from "react-router-dom";

export default function DashboardPage() {
  const [logs, setLogs] = useOutletContext();

  return (
    <>
      <h1>Dashboard Page</h1>
      <p>{JSON.stringify(logs)}</p>
    </>
  );
}
