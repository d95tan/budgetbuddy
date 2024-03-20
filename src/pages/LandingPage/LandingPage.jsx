// import NavbarIn from "../../components/Navbar/NavbarIn/NavbarIn"
import NavbarOut from "../../components/Navbar/NavbarOut/NavbarOut";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import "./LandingPage.css";
const { Title } = Typography


export default function LandingPage() {
  return (
    <>
      <NavbarOut />
      <div className="landing-page-div gradient-background">
        <div className="landing-page-text">
          <Title>Welcome to BudgetBuddy!</Title>
          <Title level={5}>
            Track your finances, set goals, <br /> and grow your wealth!
          </Title>
          <Link to="/login">
            <Button type="primary">Try for free today!</Button>
          </Link>
        </div>
        <img
          className="landing-page-first-img"
          src="Landing Page Main Graphic.png"
        />
      </div>

      <div className="landing-page-div">
        <img
          className="landing-page-edit-img"
          src="Landing Page Graphic 2.png"
        />
        <div className="landing-page-text">
          <Title level={2}>
            View detailed breakdowns <br />
            Analyse your savings and investments
          </Title>
          <Title level={5}>Create goals to meet your needs.</Title>
        </div>
      </div>
    </>
  );
}
