import React, { useState } from "react";

const FilterSection = () => {
  const [filters, setFilters] = useState({
    faculty: "semua",
    scholarship: "semua",
    status: "semua",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-4">
        <label className="form-label fw-light">Fakultas</label>
        <div className="dropdown">
          <button
            className="btn btn-white border d-flex justify-content-between align-items-center w-100"
            type="button"
            data-bs-toggle="dropdown"
          >
            <span>{filters.faculty}</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/e72555040aaf6eb9caaa8dba3bf5cabd69160f40?placeholderIfAbsent=true" alt="Dropdown" style={{ width: "16px" }} />
          </button>
          <ul className="dropdown-menu w-100">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("faculty", "semua")}
              >
                semua
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() =>
                  handleFilterChange("faculty", "Fakultas Ilmu Komputer")
                }
              >
                Fakultas Ilmu Komputer
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("faculty", "Fakultas Teknik")}
              >
                Fakultas Teknik
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-4">
        <label className="form-label fw-light">Beasiswa</label>
        <div className="dropdown">
          <button
            className="btn btn-white border d-flex justify-content-between align-items-center w-100"
            type="button"
            data-bs-toggle="dropdown"
          >
            <span>{filters.scholarship}</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/e72555040aaf6eb9caaa8dba3bf5cabd69160f40?placeholderIfAbsent=true" alt="Dropdown" style={{ width: "16px" }} />
          </button>
          <ul className="dropdown-menu w-100">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("scholarship", "semua")}
              >
                semua
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("scholarship", "GenBI")}
              >
                GenBI
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("scholarship", "Bidik Misi")}
              >
                Bidik Misi
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-4">
        <label className="form-label fw-light">Status</label>
        <div className="dropdown">
          <button
            className="btn btn-white border d-flex justify-content-between align-items-center w-100"
            type="button"
            data-bs-toggle="dropdown"
          >
            <span>{filters.status}</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/e72555040aaf6eb9caaa8dba3bf5cabd69160f40?placeholderIfAbsent=true" alt="Dropdown" style={{ width: "16px" }} />
          </button>
          <ul className="dropdown-menu w-100">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("status", "semua")}
              >
                semua
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("status", "Aktif")}
              >
                Aktif
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleFilterChange("status", "Tidak Aktif")}
              >
                Tidak Aktif
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
