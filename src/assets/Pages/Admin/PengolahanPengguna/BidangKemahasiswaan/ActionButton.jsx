"use client";
import React from "react";

const ActionButton = ({ label, icon, onClick }) => {
  return (
    <button
      className="btn btn-light rounded-pill d-flex align-items-center gap-2 py-1 px-3"
      onClick={onClick}
      style={{ fontSize: "10px" }}
    >
      <span>{label}</span>
      <img
        src={icon}
        alt={label}
        className="object-fit-contain"
        style={{ width: "14px" }}
      />
    </button>
  );
};

export default ActionButton;
