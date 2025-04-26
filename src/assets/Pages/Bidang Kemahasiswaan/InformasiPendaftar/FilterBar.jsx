"use client";
import React, { useState } from "react";

export const FilterBar = () => {
  const [filters, setFilters] = useState({
    faculty: "semua",
    scholarship: "semua",
    status: "semua",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="row g-3 mb-4">
      {/* Fakultas */}
      <div className="col-md-4">
        <label className="form-label fw-light">Fakultas</label>
        <select
          name="faculty"
          className="form-select"
          value={filters.faculty}
          onChange={handleFilterChange}
        >
          <option value="semua">semua</option>
          <option value="Fakultas Ilmu Komputer">Fakultas Ilmu Komputer</option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
        </select>
      </div>

      {/* Beasiswa */}
      <div className="col-md-4">
        <label className="form-label fw-light">Beasiswa</label>
        <select
          name="scholarship"
          className="form-select"
          value={filters.scholarship}
          onChange={handleFilterChange}
        >
          <option value="semua">semua</option>
          <option value="GenBI">GenBI</option>
          <option value="Bidik Misi">Bidik Misi</option>
        </select>
      </div>

      {/* Status */}
      <div className="col-md-4">
        <label className="form-label fw-light">Status</label>
        <select
          name="status"
          className="form-select"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="semua">semua</option>
          <option value="Aktif">Aktif</option>
          <option value="Tidak Aktif">Tidak Aktif</option>
        </select>
      </div>
    </div>
  );
};
