"use client";
import React from "react";

function StatusLegend() {
  return (
    <footer className="mt-4 d-flex gap-3 text-muted">
      <div className="d-flex align-items-center gap-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/0475a699f051b85d37fc6cfbe257ab03f01e4c0b?placeholderIfAbsent=true"
          alt="Accepted"
          style={{ width: "12px" }}
          className="rounded"
        />
        <span className="fw-light small">Diterima</span>
      </div>
      <div className="d-flex align-items-center gap-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/67229a78890d693d202ed2afe10fec68854874ca?placeholderIfAbsent=true"
          alt="Pending"
          style={{ width: "12px" }}
          className="rounded"
        />
        <span className="fw-light small">Belum</span>
      </div>
      <div className="d-flex align-items-center gap-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/fef836e54bf56bd011dd762e7967e9c44549ee61?placeholderIfAbsent=true"
          alt="Rejected"
          style={{ width: "12px" }}
          className="rounded"
        />
        <span className="fw-light small">Ditolak</span>
      </div>
    </footer>
  );
}

export default StatusLegend;
