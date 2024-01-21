import "../../App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import UserPage from "../UserPage/UserPage";
import DashboardPage from "../UserPage/DashboardPage/DashboardPage";
import TrackingPage from "../UserPage/TrackingPage/TrackingPage";
import EditPage from "../UserPage/EditPage/EditPage";
import GoalsPage from "../UserPage/GoalsPage/GoalsPage"
import AuthPage from "../AuthPage/AuthPage";

function App() {
  //*J,21/1,2100: State variable & setter function declaration 
  const [user, setUser] = useState(null);
  console.log(user);

  //* J,21/1,2100: holding code for Login page
  if (user === null) {
    return (
      <>
        <AuthPage />
      </>
    );
  } 

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="user" element={<UserPage />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="goals" element={<GoalsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
