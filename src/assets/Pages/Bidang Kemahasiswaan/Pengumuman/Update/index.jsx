import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../../../../api/apiClient";

const AnnouncementUpdate = () => {
  const { state } = useLocation();
  const [announcement, setAnnouncement] = useState(state || {});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      // Fetch the announcement if no state is passed
      const fetchAnnouncement = async () => {
        try {
          const response = await apiClient.get(
            `/announcement/detail?uuid=${state?.uuid}`
          );
          setAnnouncement(response.data);
        } catch (error) {
          console.error("Error fetching announcement:", error);
        }
      };
      fetchAnnouncement();
    }
  }, [state]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await apiClient.put("/announcement/update", announcement);
      setLoading(false);
      navigate("/admin/pengumuman");
    } catch (error) {
      setLoading(false);
      console.error("Error updating announcement:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnnouncement({ ...announcement, [name]: value });
  };

  return (
    <section className="py-4">
      <h2 className="h4 fw-bold mb-4">Update Pengumuman</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={announcement.title || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={announcement.category || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="4"
            value={announcement.description || ""}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Pengumuman"}
        </button>
      </form>
    </section>
  );
};

export default AnnouncementUpdate;
