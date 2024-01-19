import { Outlet } from "react-router-dom";
import NavbarIn from "../../components/Navbar/NavbarIn/NavbarIn";

export default function UserPage() {
  return (
    <>
      <NavbarIn />
      <h1>User Page</h1>
      <Outlet />
    </>
  )
}