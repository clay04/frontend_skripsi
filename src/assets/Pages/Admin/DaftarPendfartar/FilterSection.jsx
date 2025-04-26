"use client";
import React, { useState } from "react";

function FilterSection() {
  const [fakultas, setFakultas] = useState("semua");
  const [beasiswa, setBeasiswa] = useState("semua");
  const [status, setStatus] = useState("semua");

  const handleFilterChange = () => {
    // Di sini kamu bisa panggil API/filter data lokal
    console.log("Filter Applied:", { fakultas, beasiswa, status });
  };

  return (
    <section className="mb-0 mt-0">
      <h1 className="h5 fw-bold mb-2">Daftar Pendaftar</h1>
      <p className="text-dark mb-2 small">Pilih berdasarkan</p>

      <div className="row g-2">
        <div className="col-md-4">
          <label className="form-label small fw-light mb-1">Fakultas</label>
          <select
            className="form-select form-select-sm"
            value={fakultas}
            onChange={(e) => {
              setFakultas(e.target.value);
              handleFilterChange();
            }}
          >
            <option value="semua">Semua</option>
            <option value="filkom">Fakultas Ilmu Komputer</option>
            <option value="feb">Fakultas Ekonomi dan Bisnis</option>
            <option value="fkep">Fakultas Keperawatan</option>
            <option value="fil">Fakultas Filsafat</option>
            <option value="fkip">fakultas Ilmu pendidikan</option>
            <option value="fatek">Fakultas Teknik</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-light mb-1">Beasiswa</label>
          <select
            className="form-select form-select-sm"
            value={beasiswa}
            onChange={(e) => {
              setBeasiswa(e.target.value);
              handleFilterChange();
            }}
          >
            <option value="semua">Semua</option>
            <option value="genbi">GenBI</option>
            <option value="kip">KIP Kuliah</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-light mb-1">Status</label>
          <select
            className="form-select form-select-sm"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              handleFilterChange();
            }}
          >
            <option value="semua">Semua</option>
            <option value="diterima">Diterima</option>
            <option value="ditolak">Ditolak</option>
            <option value="menunggu">Menunggu</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default FilterSection;
