"use client";
import React from "react";

export function StudentInfo() {
  return (
    <section className="container-fluid mt-5">
      <p className="text-secondary fw-medium mb-3">105011050808 / s08080511</p>
      <div className="row">
        <div className="col-lg-9">
          <div className="mb-4">
            <h2 className="h3 fw-bold text-center mb-4">
              MENDES, CAMILLA LOVENIA MONALISA CLAUDIA
            </h2>
            <div className="mb-4">
              <h3 className="h6 fw-light mb-1">Major</h3>
              <p className="fs-5 fw-semibold">Information System</p>
            </div>
            <div>
              <h3 className="h6 fw-light mb-1">Semester</h3>
              <p className="fs-5 fw-semibold">4</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="mt-4 mt-lg-5">
            <h3 className="h5 fw-medium mb-1">Calon Penerima Beasiswa</h3>
            <p className="fs-5 fw-bold">KIP / GenBI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
