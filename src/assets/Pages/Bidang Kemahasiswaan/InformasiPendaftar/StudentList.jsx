"use client";
import React, { useEffect, useState } from "react";
import { FilterBar } from "./FilterBar";
import { StudentCard } from "./StudentCard";
import axios from "axios";

export const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = storedUser?.token;

        if (!token) {
          console.error("No token found, user might not be logged in");
          return;
        }

        const response = await axios.get("http://localhost:9900/sms-mgmt/scholarship/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const fetchedStudents = response.data.output_schema.records || [];
        setStudents(fetchedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <main className="mt-4">
      <FilterBar />
      <div className="mt-4">
        {loading ? (
          <p className="text-center">Loading daftar pendaftar...</p>
        ) : students.length === 0 ? (
          <p className="text-center text-danger">Tidak ada data pendaftar.</p>
        ) : (
          students.map((student, index) => (
            <StudentCard
              key={index}
              faculty={`${student.major?.facultyName || "-"}/${student.major?.majorName || "-"}`}
              name={`${student.masterUser?.lastName || ""}, ${student.masterUser?.firstName || ""}`}
              id={`${student.nim || "-"} / ${student.noRegistration || "-"}`}
            />
          ))
        )}
      </div>
    </main>
  );
};
