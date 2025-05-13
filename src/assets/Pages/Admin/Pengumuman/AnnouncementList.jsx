"use client";
import React, { useEffect, useState } from "react";
import { AnnouncementCard } from "./AnnouncementCard";
import { Link } from "react-router-dom";
import apiClient from "../../../../api/apiClient";

export const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = storedUser?.token;

        const response = await apiClient.get("/announcement/list", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // ✅ langsung ambil dari response.data
        const records = Array.isArray(response.data) ? response.data : [];
        setAnnouncements(records);
      } catch (error) {
        console.error("Gagal mengambil pengumuman:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleDelete = async (uuid) => {
    try {
      await apiClient.delete(`/announcement/delete?uuid=${uuid}`);
      setAnnouncements((prev) => prev.filter((item) => item.uuid !== uuid));
    } catch (error) {
      console.error("Gagal menghapus pengumuman:", error);
    }
  };

  return (
    <section className="py-4">
      <h2 className="h4 fw-bold mb-4">Pengumuman</h2>

      <Link
        to="/admin/pengumuman/add"
        className="btn btn-light rounded-3 d-flex align-items-center gap-3 mb-4"
      >
        <span className="fs-5">Tambahkan Pengumuman</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/f86c0f5ab4188643405595cb3b98aa2a04ca2d6e?placeholderIfAbsent=true"
          alt="Add"
          style={{ width: "24px", height: "24px" }}
        />
      </Link>

      {announcements.length > 0 ? (
        announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.uuid}
            uuid={announcement.uuid}
            title={announcement.title || "(Tanpa Judul)"}
            category={announcement.category || "-"}
            date={
              announcement.createdAt
                ? new Date(announcement.createdAt).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : "-"
            }
            onDetail={() => console.log("Detail:", announcement.uuid)}
            onUpdate={() => console.log("Update:", announcement.uuid)}
            onDelete={() => handleDelete(announcement.uuid)}
          />
        ))
      ) : (
        <p className="text-muted">Belum ada pengumuman yang tersedia.</p>
      )}
    </section>
  );
};
