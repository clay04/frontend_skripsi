import React from "react";
import { Link } from "react-router-dom";
import "./dashboard-admin.css";
import { LogoUK } from "../../../img";

const DashboardAdmin = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img className="dashboard-logo" src={LogoUK} alt="Logo" />
        <div className="dashboard-profile">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="70" rx="35" fill="#E0E0E0" />
            <path d="M35 23.75C37.0625 23.75 38.75 25.4375 38.75 27.5C38.75 29.5625 37.0625 31.25 35 31.25C32.9375 31.25 31.25 29.5625 31.25 27.5C31.25 25.4375 32.9375 23.75 35 23.75ZM35 40.625C40.0625 40.625 45.875 43.0438 46.25 44.375V46.25H23.75V44.3938C24.125 43.0438 29.9375 40.625 35 40.625ZM35 20C30.8562 20 27.5 23.3562 27.5 27.5C27.5 31.6438 30.8562 35 35 35C39.1437 35 42.5 31.6438 42.5 27.5C42.5 23.3562 39.1437 20 35 20ZM35 36.875C29.9937 36.875 20 39.3875 20 44.375V50H50V44.375C50 39.3875 40.0063 36.875 35 36.875Z" fill="#615F5F" />
          </svg>
        </div>
      </header>
      <aside className="dashboard-sidebar">
        <Link to="/manage-users" className="sidebar-item">Mengelola Pengguna</Link>
        <Link to="/configuration" className="sidebar-item">Konfigurasi</Link>
        <Link to="/reports" className="sidebar-item">Laporan</Link>
        <button className="logout-button">Logout</button>
      </aside>
    </div>
  );
};

export default DashboardAdmin;
