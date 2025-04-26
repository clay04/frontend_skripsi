"use client";
import React from "react";
import { FilterBar } from "./FilterBar";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  const students = [
    {
      faculty: "Fakultas Ilmu Komputer / Sistem Informasi",
      name: "Mendes, Camilla Lovenia Monalisa Claudia",
      id: "105011050808 / s08080511",
    },
    {
      faculty: "Fakultas Ilmu Komputer / Sistem Informasi",
      name: "Mendes, Camilla Lovenia Monalisa Claudia",
      id: "105011050808 / s08080511",
    },
    {
      faculty: "Fakultas Ilmu Komputer / Sistem Informasi",
      name: "Mendes, Camilla Lovenia Monalisa Claudia",
      id: "105011050808 / s08080511",
    },
    {
      faculty: "Fakultas Ilmu Komputer / Sistem Informasi",
      name: "Mendes, Camilla Lovenia Monalisa Claudia",
      id: "105011050808 / s08080511",
    },
  ];

  return (
    <main className="mt-4">
      <FilterBar />
      <div className="mt-4">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            faculty={student.faculty}
            name={student.name}
            id={student.id}
          />
        ))}
      </div>
    </main>
  );
};
