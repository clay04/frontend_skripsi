"use client";
import React from "react";
import { Link } from "react-router-dom";

export const ParentInformation = () => {
  return (
    <section className="bg-light rounded p-5 mt-5">
      <h2 className="h5 fw-semibold mb-4">Orang Tua</h2>

      <div className="mb-4">
        <h3 className="h6 fw-semibold ms-4 mb-3">Ayah</h3>
        <div className="row ms-4">
          <div className="col-md-4">
            <p className="mb-2">Nama :</p>
            <p className="mb-2">Alamat :</p>
            <p className="mb-2">Pekerjaan :</p>
            <p className="mb-2">No. Telepon :</p>
          </div>
          <div className="col-md-8">
            <p className="mb-2 fw-semibold">Nama Ayah</p>
            <p className="mb-2 fw-semibold">Alamat Ayah</p>
            <p className="mb-2 fw-semibold">Pekerjaan Ayah</p>
            <p className="mb-2 fw-semibold">08xxxxx</p>
          </div>
        </div>
      </div>

      <hr className="border-dark border-dashed my-4" />

      <div className="mb-4">
        <h3 className="h6 fw-semibold ms-4 mb-3">Ibu</h3>
        <div className="row ms-4">
          <div className="col-md-4">
            <p className="mb-2">Nama :</p>
            <p className="mb-2">Alamat :</p>
            <p className="mb-2">Pekerjaan :</p>
            <p className="mb-2">No. Telepon :</p>
          </div>
          <div className="col-md-8">
            <p className="mb-2 fw-semibold">Nama Ibu</p>
            <p className="mb-2 fw-semibold">Alamat Ibu</p>
            <p className="mb-2 fw-semibold">Pekerjaan Ibu</p>
            <p className="mb-2 fw-semibold">08xxxxx</p>
          </div>
        </div>
      </div>

      <div className="ms-4">
        <Link to="/bidang/informasi-pendaftar/data-pendaftar/validation-and-check" className="btn btn-light fw-semibold mb-3 px-3">
          Validasi Data dan Dokumen
        </Link>
        <br />
        <button className="btn btn-light fw-semibold px-5">Ubah Status</button>
      </div>
    </section>
  );
};
