"use client";
import React from "react";
import { Link } from "react-router-dom";

export const StudentDetails = () => {
  return (
    <section className="mt-0 px-4">
      <div className="d-flex align-items-center gap-2 mb-5">
        <Link to="/bidang/informasi-pendaftar" className="text-decoration-none">

            <img
            src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/659fa5f3e981f264647a7f21ca78fa1154d428a4?placeholderIfAbsent=true"
            className="d-block"
            style={{ width: "25px", height: "25px", objectFit: "contain" }}
            alt="Navigation"
            />
        </Link>
        
        <Link to="/bidang/informasi-pendaftar" ><h2 className="h4 mb-0 fw-bold text-black">Daftar Mahasiswa</h2></Link>
        <span>/</span>
        <h2 className="h4 mb-0 text-primary">Data Pendaftar</h2>
      </div>

      <div className="text-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/a6ad1e3001d1a75f315b4bbceaeed8bc7f32d3be?placeholderIfAbsent=true"
          className="rounded-circle mb-4"
          style={{ width: "150px", height: "150px", objectFit: "contain" }}
          alt="Student"
        />
        <h3 className="h4 fw-bold mb-2">
          Mendes, Camilla Lovenia <br />
          Monalisa Claudia
        </h3>
        <p className="text-secondary mb-4">105011050808 / s08080511</p>

        <div className="row">
          <div className="col-md-4">
            <div className="text-start">
              <p className="mb-2">Fakultas :</p>
              <p className="mb-2">Jurusan :</p>
              <p className="mb-2">Email :</p>
              <p className="mb-2">No. Telepon :</p>
              <p className="mb-2">IPK :</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="text-start">
              <p className="mb-2 fw-medium">Fakultas Ilmu Komputer</p>
              <p className="mb-2 fw-medium">Sistem Informasi</p>
              <p className="mb-2 fw-medium">s08080511@student.unklab.ac.id</p>
              <p className="mb-2 fw-medium">082251867733</p>
              <p className="mb-2 fw-medium">3.99</p>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 mt-3">
          <span>Beasiswa :</span>
          <span className="fw-medium">GenBI</span>
        </div>
      </div>
    </section>
  );
};
