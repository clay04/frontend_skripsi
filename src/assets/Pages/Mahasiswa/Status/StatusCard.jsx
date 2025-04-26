"use client";
import React from "react";
import { StudentInfo } from "./UserInfo";

export function StatusCard() {
  return (
    <section className="bg-body-tertiary rounded-3 shadow">
      <div className="bg-warning-subtle d-flex justify-content-between align-items-center p-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/6ec9716ab75e18b052329cccc141fcbf2f7c7638?placeholderIfAbsent=true"
          alt="Status Icon"
          className="object-fit-contain"
          style={{ width: "70px", height: "70px" }}
        />
        <div className="text-center">
          <h2 className="h4 fw-medium mb-2">
            Mohon maaf, masih dalam proses seleksi
          </h2>
          <p className="fs-4 fw-light mb-0">
            Harap memeriksa kembali saat jadwal pengumuman.
          </p>
        </div>
        <div className="d-flex gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/ac90fedeca26d1753ba5b8f81d53288fc5d43f8e?placeholderIfAbsent=true"
            alt="Status Icon 1"
            className="object-fit-contain"
            style={{ width: "70px", height: "70px" }}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/0e34a6da093adf40a7f5888c16bff8935e9ccedb?placeholderIfAbsent=true"
            alt="Status Icon 2"
            className="object-fit-contain"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
      </div>
      <StudentInfo />
    </section>
  );
}
