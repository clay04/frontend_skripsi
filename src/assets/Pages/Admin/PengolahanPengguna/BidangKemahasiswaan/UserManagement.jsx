"use client";
import React from "react";
import UserCard from "./UserCard";

const UserManagement = () => {
  const users = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/065b4fba7a9ba11713029b4e26a9308b8b383f08?placeholderIfAbsent=true",
      name: "Mendes, Camilla Lovenia Monalisa Claudia",
      email: "mendescamilla@unklab.ac.id",
    },
    // Repeated for other users
  ];

  return (
    <section className="p-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 mb-4">
        <h1 className="h4 fw-bold mb-0">Daftar Bidang Kemahasiswaan</h1>
        <div className="bg-light rounded-3 d-flex align-items-center gap-4 py-2 px-4 flex-grow-1">
          <span className="text-secondary">Search</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/7d324a11d19de8fbd804298d8135ece2db18bb3a?placeholderIfAbsent=true"
            alt="Search"
            style={{ width: "16px", aspectRatio: "1", objectFit: "contain" }}
          />
        </div>
      </div>

      <button className="btn bg-light rounded-3 d-flex align-items-center gap-3 mb-4">
        <span className="fs-5">Tambahkan User</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/759489d7dfcee5aa892f904a817becf7d60e7e22?placeholderIfAbsent=true"
          alt="Add"
          style={{ width: "17px", aspectRatio: "1", objectFit: "contain" }}
        />
      </button>

      <div className="user-list">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </section>
  );
};

export default UserManagement;
