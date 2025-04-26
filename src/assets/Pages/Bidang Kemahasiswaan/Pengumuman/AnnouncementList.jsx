"use client";
import React from "react";
import { AnnouncementCard } from "./AnnouncementCard";

export const AnnouncementList = () => {
  return (
    <section className="py-4">
      <h2 className="h4 fw-bold mb-4">Pengumuman</h2>

      <button className="btn btn-light rounded-3 d-flex align-items-center gap-3 mb-4">
        <span className="fs-5">Tambahkan Pengumuman</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/f86c0f5ab4188643405595cb3b98aa2a04ca2d6e?placeholderIfAbsent=true"
          alt="Add"
          style={{ width: "24px", height: "24px" }}
        />
      </button>

      <div className="announcement-list">
        <AnnouncementCard
          date="10-April-2025"
          title="Jadwal Pendaftaran Beasiswa Semester 2 tahun ajaran 2024/2025"
          category="Jadwal Pendaftaran"
        />
        <AnnouncementCard
          date="10-April-2025"
          title="Jadwal Pendaftaran Beasiswa Semester 2 tahun ajaran 2024/2025"
          category="Jadwal Pendaftaran"
        />
      </div>
    </section>
  );
};
