"use client";
import React from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const students = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/0af7f59473cb15434c6049f8168453068c57fd9e?placeholderIfAbsent=true",
      faculty: "Fakultas Ilmu Komputer / Sistem Informasi",
      name: "Mendes, Camilla Lovenia Monalisa Claudia",
      id: "105011050808 / s08080511",
    },
    // Repeated for other students...
  ];

  return (
    <section className="mt-0 w-100">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <h2 className="mb-0" style={{ fontSize: "25px", fontWeight: "700" }}>
          Daftar Mahasiswa
        </h2>
        <div className="bg-light rounded-3 d-flex align-items-center gap-4 py-2 px-4">
          <span className="text-secondary" style={{ fontWeight: "500" }}>
            Search
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/7d324a11d19de8fbd804298d8135ece2db18bb3a?placeholderIfAbsent=true"
            alt="Search"
            style={{ width: "16px", aspectRatio: "1", objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-3 mt-4 ps-2">
        <span>Filter</span>
        <div className="border rounded-2 bg-white d-flex align-items-center gap-4 py-1 px-3">
          <span style={{ fontSize: "14px" }}>semua</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/e72555040aaf6eb9caaa8dba3bf5cabd69160f40?placeholderIfAbsent=true"
            alt="Dropdown"
            style={{ width: "16px", aspectRatio: "1", objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="d-flex flex-column w-100">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </section>
  );
};

export default StudentList;
