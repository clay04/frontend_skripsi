import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Content() {
  const [userData, setUserData] = useState(null);
  const [scholarshipData, setScholarshipData] = useState(null);

  useEffect(() => {
    const fetchUserAndScholarshipData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = storedUser?.token;
    
        if (!storedUser || !token) {
          console.error("No user data or token found in localStorage");
          return;
        }
    
        const userUuid = storedUser.user.uuid;

        // Fetch user profile
        const userResponse = await axios.get(`http://localhost:9900/sms-mgmt/master-user/detail?uuid=${userUuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const fetchedUserData = userResponse.data.output_schema.result || null;
        setUserData(fetchedUserData);

        // Fetch scholarship
        const scholarshipResponse = await axios.get(`http://localhost:9900/sms-mgmt/scholarship/get?userUuid=${userUuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const scholarshipFetched = scholarshipResponse.data.output_schema.records?.[0] || null; // ambil satu saja
        setScholarshipData(scholarshipFetched);

      } catch (error) {
        console.error("Error fetching user or scholarship data:", error);
      }
    };

    fetchUserAndScholarshipData();
  }, []);

  if (!userData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="text-center mb-5">
      <div className="d-flex flex-column align-items-center">
        <div
          className="rounded-circle bg-secondary"
          style={{ width: "250px", height: "250px" }}
        />
        <h2 className="h3 fw-bold mt-4">
          {userData.first_name} {userData.last_name}
        </h2>
        <div className="mt-3">
          <p className="text-secondary mb-4">
            {scholarshipData ? `${scholarshipData.nim} / ${scholarshipData.noRegistration}` : "-"}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="d-flex gap-3 mb-3">
          <h3 className="h5 mb-0">Email</h3>
          <span>:</span>
          <p className="mb-0 fw-medium">{userData.email}</p>
        </div>

        {/* Tambahkan bagian beasiswa */}
        {scholarshipData ? (
          <div className="mt-0">

            <div className="d-flex gap-3 mb-3">
              <h3 className="h5 mb-0">Jurusan</h3>
              <span>:</span>
              <p className="mb-0 fw-medium">{scholarshipData.major?.facultyName || "-"}</p>
            </div>

            <div className="d-flex gap-3 mb-3">
              <h3 className="h5 mb-0">Jurusan</h3>
              <span>:</span>
              <p className="mb-0 fw-medium">{scholarshipData.major?.majorName || "-"}</p>
            </div>

            <div className="d-flex gap-3 mb-3 mt-3">
              <h3 className="h5 mb-0">Jenis Beasiswa</h3>
              <span>:</span>
              <p className="mb-0 fw-medium">{scholarshipData.scholarshipType}</p>
            </div>

            <div className="d-flex gap-3 mb-3">
              <h3 className="h5 mb-0">Status Beasiswa</h3>
              <span>:</span>
              <p className="mb-0 fw-medium">{scholarshipData.status}</p>
            </div>
          </div>
        ) : (
          <div className="mt-5 text-danger">
            <p>Belum ada data beasiswa</p>
          </div>
        )}
      </div>
    </div>
  );
}
