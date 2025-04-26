"use client";
import React from "react";

function RegistrantTable() {
  return (
    <section className="bg-light rounded p-4 mt-4">
      <h2 className="h5 mb-4">Table Pendaftar</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="bg-white">
              <th className="py-3">Nama</th>
              <th className="py-3">Fakultas</th>
              <th className="py-3">Kelengkapan Dokumen</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <td className="py-3">Mendes, Camilla Lovenia Monalisa caludia</td>
              <td className="py-3">Fakultas Ilmu Komputer</td>
              <td className="py-3">Lengkap</td>
              <td className="py-3">Lolos</td>
            </tr>
            <tr className="bg-light">
              <td className="py-3">Mendes, Camilla Lovenia Monalisa caludia</td>
              <td className="py-3">Fakultas Ilmu Komputer</td>
              <td className="py-3">Lengkap</td>
              <td className="py-3">Tidak Lolos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RegistrantTable;
