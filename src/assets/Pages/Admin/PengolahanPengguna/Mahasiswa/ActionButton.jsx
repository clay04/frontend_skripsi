"use client";
import React from "react";

const ActionButton = ({ icon, label, onClick }) => {
  return (
    <button
      className="btn btn-light rounded-pill d-flex align-items-center gap-3 py-1 px-3"
      onClick={onClick}
      style={{ fontSize: "10px" }}
    >
      <span>{label}</span>
      <img
        src={icon}
        alt=""
        className="action-icon"
        style={{ width: "14px", objectFit: "contain" }}
      />
    </button>
  );
};

export default ActionButton;
