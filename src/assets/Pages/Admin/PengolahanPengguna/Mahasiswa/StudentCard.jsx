"use client";
import React from "react";
import ActionButton from "./ActionButton";

const StudentCard = ({ student }) => {
  return (
    <article className="bg-light rounded-3 p-3 d-flex align-items-center justify-content-between gap-3 flex-wrap mt-4">
      <div className="d-flex align-items-center gap-4">
        <img
          src={student.avatar}
          alt=""
          className="rounded-circle"
          style={{ width: "40px", aspectRatio: "1", objectFit: "contain" }}
        />
        <div className="d-flex flex-column">
          <p
            className="mb-0"
            style={{ fontSize: "10px", color: "rgb(97, 97, 97)" }}
          >
            {student.faculty}
          </p>
          <h3 className="mb-0 mt-1" style={{ fontSize: "16px" }}>
            {student.name}
          </h3>
          <p
            className="mb-0 mt-1"
            style={{ fontSize: "12px", color: "rgb(97, 97, 97)" }}
          >
            {student.id}
          </p>
        </div>
      </div>
      <div className="text-secondary" style={{ fontSize: "16px" }}>
        GenBI
      </div>
      <div className="d-flex gap-2">
        <ActionButton label="Detail" icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/ace77583411a4ee7faf19261d9fc3d4b8417296d?placeholderIfAbsent=true" />
        <ActionButton label="Update" icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/5f095fbcc39d405dd8b2c3fba09177a698108be1?placeholderIfAbsent=true" />
        <ActionButton label="Delete" icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/ad98de4380791ed97542b78558925c97e83a1984?placeholderIfAbsent=true" />
      </div>
    </article>
  );
};

export default StudentCard;
