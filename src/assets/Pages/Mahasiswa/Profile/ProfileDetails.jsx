import React from "react";

export default function ProfileDetails() {
  return (
    <div className="mt-4">
      <div className="d-flex gap-3 mb-3">
        <h3 className="h5 mb-0">Email</h3>
        <span>:</span>
        <p className="mb-0 fw-medium">s08080511@student.unklab.ac.id</p>
      </div>

      <div className="d-flex gap-3 mb-3">
        <h3 className="h5 mb-0">Fakultas</h3>
        <span>:</span>
        <p className="mb-0 fw-medium">Computer Science</p>
      </div>

      <div className="d-flex gap-3 mb-3">
        <h3 className="h5 mb-0">Major/Semester</h3>
        <span>:</span>
        <p className="mb-0 fw-medium">Information System / 4</p>
      </div>

      <div className="d-flex gap-3">
        <h3 className="h5 mb-0">Status</h3>
        <span>:</span>
        <p className="mb-0 fw-medium">Pending</p>
      </div>
    </div>
  );
}
