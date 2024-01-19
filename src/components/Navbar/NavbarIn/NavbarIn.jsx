import "../Navbar.css";
import { SettingOutlined } from "@ant-design/icons";
import { Layout, Button, Menu } from "antd";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const { Header } = Layout;

export default function NavbarIn() {
  let page = useLocation().pathname.split("/")[1];
  
  const items = [
    { key: "dashboard", label: <Link to="/user/dashboard" className="link">Dashboard</Link>},
    { key: "tracking", label: <Link to="/user/tracking" className="link">Tracking</Link> },
    { key: "edit", label: <Link to="/user/edit" className="link">Edit</Link> },
    { key: "goals", label: <Link to="/user/goals" className="link">Goals</Link> },
  ];

  return (
    <Header theme="light" className="navbar">
      <Link to="/user/dashboard" className="brand">
        <img src="/Logo.svg" alt="Logo" style={{ width: 40, height: 40 }} />
        <span className="app-name">BudgetBuddy</span>
      </ Link>

      <Menu
        className="menu"
        // selectedKeys={page}
        defaultSelectedKeys={page}
        theme="light"
        mode="horizontal"
        items={items}
      />

      <div className="auth-buttons">
        <Link to="/user/preferences">
          <Button icon={<SettingOutlined />}></Button>
        </Link>
      </div>
    </Header>
  );
}
