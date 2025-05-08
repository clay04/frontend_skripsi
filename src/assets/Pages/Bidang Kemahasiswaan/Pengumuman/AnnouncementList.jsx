"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AnnouncementCard } from "../../Admin/Pengumuman/AnnouncementCard";

export const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("http://103.31.39.151:9900/sms-mgmt/announcement/list");
        const records = response.data.output_schema.records;
        setAnnouncements(records || []);
      } catch (error) {
        console.error("Gagal mengambil pengumuman:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleDelete = async (uuid) => {
    try {
      await axios.delete(`http://103.31.39.151:9900/sms-mgmt/announcement/delete?uuid=${uuid}`);
      setAnnouncements((prev) => prev.filter((item) => item.uuid !== uuid));
    } catch (error) {
      console.error("Gagal menghapus pengumuman:", error);
    }
  };

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

      {announcements.length > 0 ? (
        announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.uuid}
            uuid={announcement.uuid}
            date={new Date(announcement.createdAt).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            title={announcement.title}
            category={announcement.category}
            onDetail={(uuid) => console.log("Detail:", uuid)}
            onUpdate={(uuid) => console.log("Update:", uuid)}
            onDelete={(uuid) => handleDelete(uuid)}
          />
        ))
      ) : (
        <p className="text-muted">Belum ada pengumuman yang tersedia.</p>
      )}
    </section>
  );
};
