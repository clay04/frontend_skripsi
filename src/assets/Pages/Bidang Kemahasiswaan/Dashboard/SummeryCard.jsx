"use client";
import React from "react";

function SummaryCards() {
  return (
    <section className="bg-light rounded p-4">
      <h2 className="h5 mb-4">Ringkasan Pendaftar</h2>
      <div className="row g-4">
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="bg-white rounded p-4 text-center">
            <h3 className="h2 mb-4">150</h3>
            <p className="mb-0">Total Pendaftar</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="bg-white rounded p-4 text-center">
            <h3 className="h2 mb-4">100</h3>
            <p className="mb-0">Divalidasi</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="bg-white rounded p-4 text-center">
            <h3 className="h2 mb-4">40</h3>
            <p className="mb-0">Diterima</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="bg-white rounded p-4 text-center">
            <h3 className="h2 mb-4">60</h3>
            <p className="mb-0">Ditolak</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummaryCards;
