"use client";
import React from "react";

export const StatisticsCard = ({ title, mainCount, genbiCount, kipCount }) => {
  return (
    <div className="card bg-white bg-opacity-60 shadow">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-semibold m-0 fs-6">{title}</h3>
          <div className="d-flex gap-2">
            <span>:</span>
            <span className="fw-semibold">{mainCount}</span>
            <span>Orang</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <span>GenBI</span>
          <div className="d-flex gap-2">
            <span>:</span>
            <span>{genbiCount}</span>
            <span>Orang</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span>KIP Kuliah</span>
          <div className="d-flex gap-2">
            <span>:</span>
            <span>{kipCount}</span>
            <span>Orang</span>
          </div>
        </div>
      </div>
    </div>
  );
};
