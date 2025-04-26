"use client";
import React from "react";
import ActionButton from "./ActionButton";

const UserCard = ({ user }) => {
  return (
    <article className="bg-light rounded-3 p-3 mb-3 d-flex justify-content-between align-items-center flex-wrap">
      <div className="d-flex align-items-center gap-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="rounded-circle"
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
        />
        <div>
          <h3 className="fs-6 fw-medium mb-1">{user.name}</h3>
          <p className="text-secondary mb-0" style={{ fontSize: "12px" }}>
            {user.email}
          </p>
        </div>
      </div>
      <div className="d-flex gap-2">
        <ActionButton label="Detail" icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/ace77583411a4ee7faf19261d9fc3d4b8417296d?placeholderIfAbsent=true" />
        <ActionButton label="Update" icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/a154743981e0cd6cff048fde9e548bc44e596386?placeholderIfAbsent=true" />
        <ActionButton label="Delete" icon="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/ad98de4380791ed97542b78558925c97e83a1984?placeholderIfAbsent=true" />
      </div>
    </article>
  );
};

export default UserCard;
