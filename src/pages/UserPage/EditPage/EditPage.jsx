import { useOutletContext } from "react-router-dom";
import EditTable from "../../../components/EditTable/EditTable";

export default function EditPage() {
  const [logs, setLogs] = useOutletContext();
  
  return (
    <>
      <h1>Edit Page</h1>
      <EditTable logs={logs} setLogs={setLogs} />
    </>
  );
}
