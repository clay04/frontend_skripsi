"use client";
import React from "react";
import FormInput from "./FormInput";
import FileUpload from "./FileUpload";
import { Link } from "react-router-dom";

function AnnouncementForm() {
  return (
    <section className="py-4">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <Link to="/admin/pengumuman" className="d-flex align-items-center gap-2">
          <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/659fa5f3e981f264647a7f21ca78fa1154d428a4?placeholderIfAbsent=true" alt="Icon" style={{ width: "25px" }} />
          <h1 className="h4 fw-bold mb-0">
            Pengumuman <span className="text-muted">/</span>
            <span className="text-primary">Pengumuman Baru</span>
          </h1>
        </Link>

        <div className="d-flex align-items-center bg-light rounded-3 py-2 px-3">
          <span className="text-muted me-3">Search</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/7d324a11d19de8fbd804298d8135ece2db18bb3a?placeholderIfAbsent=true" alt="Search" style={{ width: "16px" }} />
        </div>
      </div>

      <div className="bg-light rounded-3 p-4">
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="text-center">
              <div
                className="bg-white rounded-3 p-4 d-flex align-items-center justify-content-center"
                style={{ height: "150px", width: "150px" }}
              >
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/bd35fde20057cda4be331de813726b4ee550668f?placeholderIfAbsent=true" alt="Upload" style={{ width: "70px" }} />
              </div>
              <span className="text-muted small mt-2 d-block">
                Banner / Logo
              </span>
            </div>
          </div>

          <div className="col-md-9">
            <FormInput label="Judul Pengumuman" placeholder="Nama Beasiswa" />
            <FormInput
              label="Isi Pengumuman"
              placeholder="Deskripsi"
              multiline
              height={150}
            />
          </div>
        </div>

        <FormInput
          label="Kategori Pengumuman"
          placeholder="Tipe Beasiswa"
          icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/b8ed412834140eee3b26bb1f0b54e71a8bba8bec?placeholderIfAbsent=true"
        />

        <div className="row mt-4">
          <div className="col-md-6">
            <FormInput
              label="Tanggal terbit"
              placeholder="dd/mm/yyyy"
              icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/743bb9b2959a83965acf13b89e69606161e3aae1?placeholderIfAbsent=true"
            />
            <h3 className="h6 fw-bold mt-3">Upload Lampiran</h3>
          </div>
          <div className="col-md-6">
            <FormInput
              label="Waktu tayang"
              placeholder="dd/mm/yyyy"
              icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/826e69021ddc310ef690199a594ace35270c6b43?placeholderIfAbsent=true"
            />
          </div>
        </div>

        <FileUpload />

        <button className="btn btn-success px-4 mt-5">Save</button>
      </div>
    </section>
  );
}

export default AnnouncementForm;
