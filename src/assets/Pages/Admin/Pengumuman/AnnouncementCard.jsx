"use client";
import React from "react";
import ActionButton from "./ActionButton";

const AnnouncementCard = ({ image, date, status, title, category }) => {
  return (
    <article className="announcement-card p-3 mb-3 rounded border shadow-sm bg-white transition-all">
      <div className="d-flex gap-3">
        <img
          src={image}
          alt="Announcement"
          className="rounded"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div className="flex-grow-1">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2 text-secondary small">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/bb304231881571f2c0606227c19daad985a723b5?placeholderIfAbsent=true"
                alt="Calendar"
                width="13"
              />
              <time>{date}</time>
            </div>
            <span
              className={`badge px-2 py-1 rounded-pill small fw-medium ${
                status === "Ditampilkan" ? "bg-success-subtle text-success" : "bg-secondary-subtle text-secondary"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="d-flex justify-content-between align-items-start mt-2 flex-wrap gap-2">
            <h3 className="h6 mb-1 text-dark">{title}</h3>
            <div className="d-flex gap-2">
              <ActionButton icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/ace77583411a4ee7faf19261d9fc3d4b8417296d?placeholderIfAbsent=true" label="Detail" />
              <ActionButton icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/a154743981e0cd6cff048fde9e548bc44e596386?placeholderIfAbsent=true" label="Update" />
              <ActionButton icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/ad98de4380791ed97542b78558925c97e83a1984?placeholderIfAbsent=true" label="Delete" />
            </div>
          </div>

          <div className="d-flex gap-2 small text-secondary mt-1">
            <span>Kategori</span>
            <span>:</span>
            <span>{category}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AnnouncementCard;
