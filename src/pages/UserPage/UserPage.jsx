import { Outlet } from "react-router-dom";
import NavbarIn from "../../components/Navbar/NavbarIn/NavbarIn";
import { useEffect, useState } from "react";
import { getLogs } from "../../utilities/logsService";

export default function UserPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getLogs();
      data.sort((a, b) => {
        const dateA = a.date;
        const dateB = b.date;
        if (dateA < dateB) {
          return 1;
        } else {
          return -1;
        }
      });
      setLogs(data);
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
