"use client";
import React from "react";
import { StatisticsCard } from "./StatisticsCard";
import { FacultyTable } from "./FacultyTable";

export const LaporanAnalitikContent = () => {
  return (
    <main className="w-full p-1">
      <div className="w-full p-1">
        <h1 className="fw-bold fs-4 mb-4">Laporan & Statistik</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <StatisticsCard
              title="Jumlah Pendaftar"
              mainCount="150"
              genbiCount="96"
              kipCount="54"
            />
          </div>
          <div className="col-md-4">
            <StatisticsCard
              title="Lolos"
              mainCount="100"
              genbiCount="61"
              kipCount="39"
            />
          </div>
          <div className="col-md-4">
            <StatisticsCard
              title="Tidak Lolos"
              mainCount="50"
              genbiCount="35"
              kipCount="15"
            />
          </div>
        </div>

        <div
          className="card bg-white bg-opacity-60 shadow mt-4"
          style={{ maxWidth: "479px" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h3 className="fw-semibold fs-6 mb-3">
                  Penyebab Tidak Lolos
                </h3>
                <div className="mb-3">Tidak Memenuhi IPK</div>
                <div className="mb-3">Dokumen tidak lengkap</div>
                <div>Kedua-duanya</div>
              </div>
              <div className="col-4">
                <div className="mt-4">
                  <div className="d-flex gap-2 mb-3">
                    <span>:</span>
                    <span>30</span>
                    <span>Orang</span>
                  </div>
                  <div className="d-flex gap-2 mb-3">
                    <span>:</span>
                    <span>15</span>
                    <span>Orang</span>
                  </div>
                  <div className="d-flex gap-2">
                    <span>:</span>
                    <span>5</span>
                    <span>Orang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FacultyTable />
      </div>
    </main>
  );
};

export default LaporanAnalitikContent;
