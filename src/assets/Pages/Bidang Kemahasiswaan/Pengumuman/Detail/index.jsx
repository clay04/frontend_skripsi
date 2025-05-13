import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiClient from "../../../../../api/apiClient";

const AnnouncementDetail = () => {
  const { uuid } = useParams(); // Ambil uuid dari URL
  const { state } = useLocation(); // Ambil state jika ada
  const [announcement, setAnnouncement] = useState(state || {}); // Inisialisasi state
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      const fetchAnnouncementDetail = async () => {
        try {
          const response = await apiClient.get(`/announcement/detail?uuid=${uuid}`);
          const data = response.data?.result || {}; // Pastikan ambil dari `result` jika pakai response builder
          setAnnouncement(data);
        } catch (error) {
          console.error("Gagal mengambil detail pengumuman:", error);
        }
      };
      fetchAnnouncementDetail();
    }
  }, [uuid, state]);

  // Fungsi untuk menampilkan tanggal dengan aman
  const formatDate = (dateString) => {
    if (!dateString) return "Tanggal tidak tersedia";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Format tanggal tidak valid" : date.toLocaleDateString();
  };

  return (
    <section className="py-4">
      <h2 className="h4 fw-bold mb-4">Detail Pengumuman</h2>
      <div>
        <h5>{announcement.title || "Judul tidak tersedia"}</h5>
        <p>{announcement.category || "Kategori tidak tersedia"}</p>
        <p>{formatDate(announcement.publish_date || announcement.createdAt)}</p>
        <p>{announcement.description || "Deskripsi tidak tersedia"}</p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() =>
          navigate(`/admin/announcement/update/${announcement.uuid}`, {
            state: announcement,
          })
        }
      >
        Edit Pengumuman
      </button>
    </section>
  );
};

export default AnnouncementDetail;
