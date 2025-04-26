import React from "react";

export default function ProfileHeader() {
  return (
    <div className="text-center mb-5">
      <div className="d-flex flex-column align-items-center">
        <div
          className="rounded-circle bg-secondary"
          style={{ width: "250px", height: "250px" }}
        />

        <h2 className="h3 fw-bold mt-4">
          Mendes, Camilla Lovenia Monalisa Claudia
        </h2>

        <div className="mt-3">
          <p className="text-secondary mb-4">105011050808 / s08080511</p>
        </div>
      </div>
    </div>
  );
}
