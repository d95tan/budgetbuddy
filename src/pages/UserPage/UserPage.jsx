import { Outlet } from "react-router-dom";
import NavbarIn from "../../components/Navbar/NavbarIn/NavbarIn";
import { useEffect, useState } from "react";
import { getLogs } from "../../utilities/logsService";

export default function UserPage({ user, setUser }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getLogs();
      setLogs(data);
      console.log(data);
    })();
  }, []);

  return (
    <>
      {/* //? J 24/1 0120: remove NavBarIn here, to follow notes, to have it outside <Routes>. will place it in App.jsx. */}
      <NavbarIn user={user} setUser={setUser} />
      <h1>User Page</h1>
      <Outlet context={[logs, setLogs]} />
    </>
  );
}