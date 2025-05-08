"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    non_student_email: "",
  });
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;

      const response = await axios.get("https://simbeasiswauk.site:9900/sms-mgmt/master-user/get", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const allUsers = response.data.output_schema.records || [];
      const bidangUsers = allUsers.filter((user) => user.role?.roleId === "02");
      setUsers(bidangUsers);
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitUser = async () => {
    try {
      setLoadingSubmit(true);
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;

      const payload = {
        uuid: null,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        non_student_email: formData.non_student_email,
        role_id: "02",
        status: true,
      };

      await axios.post("https://simbeasiswauk.site:9900/sms-mgmt/master-user/create", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("User berhasil ditambahkan.");
      setShowModal(false);
      setFormData({
        username: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        non_student_email: "",
      });
      fetchUsers();
    } catch (error) {
      console.error("Gagal menambahkan user:", error);
      alert("Gagal menambahkan user.");
    } finally {
      setLoadingSubmit(false);
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.last_name} ${user.first_name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 mb-4">
        <h1 className="h4 fw-bold mb-0">Daftar Bidang Kemahasiswaan</h1>
        <div className="input-group w-auto flex-grow-1">
          <span className="input-group-text bg-light border-0">
            <i className="bi bi-search text-secondary" />
          </span>
          <input
            type="text"
            className="form-control border-0 bg-light"
            placeholder="Cari nama user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <button className="btn btn-light rounded-3 d-flex align-items-center gap-2 mb-4" onClick={() => setShowModal(true)}>
        <i className="bi bi-person-plus fs-5" />
        <span className="fs-6">Tambahkan User</span>
      </button>

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard
              key={index}
              user={{
                avatar: user.avatar || "https://ui-avatars.com/api/?name=Unknown",
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
              }}
            />
          ))
        ) : (
          <p className="text-muted">Tidak ada user ditemukan.</p>
        )}
      </div>

      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tambah User Bidang Kemahasiswaan</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <input name="username" className="form-control mb-2" placeholder="Username" value={formData.username} onChange={handleInputChange} />
                <input name="first_name" className="form-control mb-2" placeholder="Nama Depan" value={formData.first_name} onChange={handleInputChange} />
                <input name="last_name" className="form-control mb-2" placeholder="Nama Belakang" value={formData.last_name} onChange={handleInputChange} />
                <input name="phone_number" className="form-control mb-2" placeholder="Nomor Telepon" value={formData.phone_number} onChange={handleInputChange} />
                <input name="non_student_email" className="form-control mb-2" placeholder="Email Non-Student" type="email" value={formData.non_student_email} onChange={handleInputChange} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Batal</button>
                <button className="btn btn-primary" onClick={handleSubmitUser} disabled={loadingSubmit}>
                  {loadingSubmit ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserManagement;