"use client";
import React from "react";
import { StatusCard } from "./StatusCard";
import { StudentInfo } from "./UserInfo";

function StatusSeleksi() {
  return (
    <main className="bg-white min-vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <div className="py-4">
              <StatusCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StatusSeleksi;
