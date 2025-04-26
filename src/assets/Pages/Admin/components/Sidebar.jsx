"use client";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="p-3 pt-4 bg-light">
      <div className="nav flex-column h-100" style={{ width: "240px", minHeight: "100vh" }}>
        <Link to="/admin/dashboard" className="align-self-end">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/6bcabb01bd314d3f2f3d65eecb3aa4a0ba5778f5?placeholderIfAbsent=true"
            alt="User avatar"
            className="rounded-circle mb-4"
            style={{ width: "40px" }}
          />
        </Link>

        <Link to="/admin/manajemen-beasiswa" className="nav-link bg-white rounded-end py-2 px-3 mb-2">
          <i className="bi bi-file-earmark-text"></i>
          <span className="ms-2 text-nowrap">Manajemen Beasiswa</span>
        </Link>

        <Link to="/admin/daftar-pendaftar" className="nav-link bg-white rounded-end py-2 px-3 mb-2">
          <i className="bi bi-file-earmark-text"></i>
          <span className="ms-2 text-nowrap">Pedaftar</span>
        </Link>

        <a href="#" className="nav-link bg-white rounded-end py-2 px-3 mb-2">
          Pengolahan Pengguna
        </a>

        <div className="ms-4 mb-2">
          <Link to="/admin/pengolahan-pengguna/mahasiswa" className="nav-link text-dark fw-light py-1 px-3">Mahasiswa</Link>
          <Link to="/admin/pengolahan-pengguna/bidang-kemahasiswaan" className="nav-link text-dark fw-light py-1 px-3">Bidang Kemahasiswaan</Link>
        </div>

        <Link to="/admin/pengumuman" className="nav-link bg-white rounded-end py-2 px-3 mb-2">Pengumuman</Link>
        <Link to="/admin/laporan-statistik" className="nav-link bg-white rounded-end py-2 px-3 mb-2">Laporan & Statistik</Link>
        <a href="#" className="nav-link bg-white rounded-end py-2 px-3 mb-2">Pengaturan Sistem</a>

        <Link to="/login" className="btn btn-danger rounded-end py-2 px-4 mt-5">Logout</Link>
      </div>
    </nav>

  );
}

export default Sidebar;
