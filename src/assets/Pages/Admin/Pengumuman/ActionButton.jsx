"use client";
import React from "react";

const ActionButton = ({ icon, label, onClick }) => {
  return (
    <button
      className="action-button btn d-flex align-items-center gap-2 border-0"
      onClick={onClick}
    >
      <span>{label}</span>
      <img
        src={icon}
        alt={`${label} icon`}
        className="action-icon"
        width="14"
      />
    </button>
  );
};

export default ActionButton;
