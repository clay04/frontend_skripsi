import React from "react";
import { Link } from "react-router-dom";
import styles from "./dashboard-admin.css";

const DashboardAdmin = () => {
  const stats = [
    { title: "Jumlah Pendaftar", value: 150, unit: "orang" },
    { title: "Jumlah Dokumen", value: 100, unit: "dokumen" },
    { title: "Jumlah Login", value: 50, unit: "User" }
  ];

  const menuItems = [
    { icon: "home", text: "Mengelola Pengguna" },
    { icon: "report", text: "Laporan" },
    { icon: "config", text: "Konfigurasi" }
  ];

  const onlineUsers = [
    { name: "User 1" },
    { name: "User 2" },
    { name: "User 3" }
  ];

  const handleLogout = () => {
    // Implement logout logic
    console.log("Logging out");
  };

  return (
    <div className="container-dashboard-admin">
      <header className="header-dashboard-admin">
        <img 
          src="https://placehold.co/256x58" 
          alt="Logo" 
          className="headerLogo-dashboard-admin" 
        />
        <div className={styles.userIcon}>
          <svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="70" rx="35" fill="#E0E0E0"/>
            <path d="M35 23.75C37.0625 23.75 38.75 25.4375 38.75 27.5C38.75 29.5625 37.0625 31.25 35 31.25C32.9375 31.25 31.25 29.5625 31.25 27.5C31.25 25.4375 32.9375 23.75 35 23.75ZM35 40.625C40.0625 40.625 45.875 43.0438 46.25 44.375V46.25H23.75V44.3938C24.125 43.0438 29.9375 40.625 35 40.625ZM35 20C30.8562 20 27.5 23.3562 27.5 27.5C27.5 31.6438 30.8562 35 35 35C39.1437 35 42.5 31.6438 42.5 27.5C42.5 23.3562 39.1437 20 35 20ZM35 36.875C29.9937 36.875 20 39.3875 20 44.375V50H50V44.375C50 39.3875 40.0063 36.875 35 36.875Z" fill="#615F5F"/>
          </svg>
        </div>
      </header>

      <aside className="sidebar-dashboard-admin">
        <nav className="sidebarMenu-dashboard-admin">
          {menuItems.map((item, index) => (
            <div key={index} className="menuItem-dashboard-admin">
              {item.icon === "home" && (
                <svg width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" rx="30" fill="#E0E0E0"/>
                  <path d="M19 42V25.3333L30 17L41 25.3333V42H32.75V32.2778H27.25V42H19ZM21.75 39.2222H24.5V29.5H35.5V39.2222H38.25V26.7222L30 20.4722L21.75 26.7222V39.2222Z" fill="black"/>
                </svg>
              )}
              <span className="menuText-dashboard-admin">{item.text}</span>
            </div>
          ))}
        </nav>

        <button 
          className="logoutButton-dashboard-admin" 
          onClick={handleLogout}
        >
          Logout
        </button>
      </aside>

      <main className="mainContent-dashboard-admin">
        <div className="statsContainer-dashboard-admin">
          {stats.map((stat, index) => (
            <div key={index} className="statCard-dashboard-admin">
              <div className="statTitle-dashboard-admin">{stat.title}</div>
              <div className="statValue-dashboard-admin">{stat.value}</div>
              <div className="statUnit-dashboard-admin">{stat.unit}</div>
            </div>
          ))}
        </div>

        <div className="onlineUsersPanel-dashboard-admin">
          <h2 className="panelTitle-dashboard-admin">User Online</h2>
          {onlineUsers.map((user, index) => (
            <div key={index} className="userItem-dashboard-admin">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#06ACDA"/>
                <path d="M10 10.625C11.5527 10.625 12.8125 9.36523 12.8125 7.8125C12.8125 6.25977 11.5527 5 10 5C8.44727 5 7.1875 6.25977 7.1875 7.8125C7.1875 9.36523 8.44727 10.625 10 10.625ZM12.5 11.25H11.4238C10.9902 11.4492 10.5078 11.5625 10 11.5625C9.49219 11.5625 9.01172 11.4492 8.57617 11.25H7.5C6.11914 11.25 5 12.3691 5 13.75V14.0625C5 14.5801 5.41992 15 5.9375 15H14.0625C14.5801 15 15 14.5801 15 14.0625V13.75C15 12.3691 13.8809 11.25 12.5 11.25Z" fill="white"/>
              </svg>
              <span className="userName-dashboard-admin">{user.name}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;