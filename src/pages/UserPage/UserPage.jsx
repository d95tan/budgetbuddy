import { Outlet } from "react-router-dom";
import NavbarIn from "../../components/Navbar/NavbarIn/NavbarIn";
import { useEffect, useState } from "react";
import { getLogs } from "../../utilities/logsService";

export default function UserPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getLogs();
      setLogs(data);
      console.log(data)
    })();
  }, []);

  return (
    <>
      <NavbarIn />
      <h1>User Page</h1>
      <Outlet context={[logs, setLogs]} />
    </>
  );
}
