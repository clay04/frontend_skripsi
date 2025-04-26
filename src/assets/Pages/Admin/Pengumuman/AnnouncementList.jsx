"use client";
import React from "react";
import SearchBar from "./SearchBar";
import AnnouncementCard from "./AnnouncementCard";
import { Link } from "react-router-dom";

const AnnouncementList = () => {
  return (
    <section className="w-full p-2">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <h1 className="h3 mb-0">Pengumuman</h1>
        <SearchBar />
      </div>

      <Link to="/admin/pengumuman/add" className="new-announcement d-inline-flex align-items-center gap-3 mt-4 px-4 py-2">
        <span className="fs-5">Pengumuman baru</span>
        <i class="bi bi-plus-lg"></i>
      </Link>

      <div className="mt-4">
        <AnnouncementCard
          image="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/bc5ce1a0ed694690b95b6af81d216c5cde2b95fa?placeholderIfAbsent=true"
          date="10-April-2025"
          status="Ditampilkan"
          title="Jadwal Pendaftaran Beasiswa Semester 2 tahun ajaran 2024/2025"
          category="Jadwal Pendaftaran"
        />
        <AnnouncementCard
          image="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/7417f64cf8f4a163adcd85fa4c090d334269f761?placeholderIfAbsent=true"
          date="10-April-2025"
          status="Ditampilkan"
          title="Pengumuman hasil seleksi beasiswa GenBI"
          category="Hasil Seleksi"
        />
        <AnnouncementCard
          image="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/0422dc433abfe3b913814e610076b8e71d2eb0ab?placeholderIfAbsent=true"
          date="10-April-2025"
          status="Disembunyikan"
          title="Jadwal seleksi beasiswa KIP Kuliah"
          category="Jadwal Seleksi"
        />
      </div>
    </section>
  );
};

export default AnnouncementList;
