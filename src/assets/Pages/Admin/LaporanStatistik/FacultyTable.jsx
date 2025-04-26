"use client";
import React from "react";

export const FacultyTable = () => {
  const faculties = [
    "Fakultas Ekonomi dan Bisnis",
    "Fakultas Ilmu Komputer",
    "Fakultas Perawat",
    "Fakultas Filsafat",
    "Fakultas Ilmu Kependidikan",
    "Fakultas Teknik",
  ];

  return (
    <section className="mt-5">
      <h2 className="fw-semibold fs-6 mb-3">Tabel Pendaftar per Fakultas</h2>

      <div className="table-responsive">
        <table className="table">
          <thead className="bg-light">
            <tr>
              <th style={{ width: "131px" }}></th>
              {faculties.map((faculty, index) => (
                <th key={index} className="fw-semibold">
                  {faculty}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-bottom border-light">
              <td className="fw-semibold">GenBI</td>
              {[...Array(6)].map((_, index) => (
                <td key={index}>0</td>
              ))}
            </tr>
            <tr className="border-bottom border-light">
              <td className="fw-semibold">KIP Kuliah</td>
              {[...Array(6)].map((_, index) => (
                <td key={index}>0</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
