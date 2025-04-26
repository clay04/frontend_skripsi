"use client";
import React from "react";
import { RegistrationHeader } from "./RegistrationHeader";
import { FormInput } from "./FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormPendaftaranKip() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [nim, setNim] = React.useState("");
  const [noRegistration, setNoRegistration] = React.useState("");
  const [scholarshipType, setScholarshipType] = React.useState("");
  const [addressLine1, setAddressLine1] = React.useState("");
  const [addressLine2, setAddressLine2] = React.useState("");
  const [highSchoolName, setHighSchoolName] = React.useState("");
  const [fatherName, setFatherName] = React.useState("");
  const [motherName, setMotherName] = React.useState("");
  const [majorId, setMajorId] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestBody = {
      uuid: crypto.randomUUID(),
      nim,
      first_name: firstName,
      last_name: lastName,
      nomor_registrasi: noRegistration,
      scholarship_type: scholarshipType,
      address_line_1: addressLine1,
      address_line_2: addressLine2,
      high_school_name: highSchoolName,
      father_name: fatherName,
      mother_name: motherName,
      major_id: majorId,
      scholarship_type: "KIP KUliah",

    };
  
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
  
    if (!token) {
      alert("Silakan login terlebih dahulu.");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:9900/sms-mgmt/scholarship/create",
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Data berhasil dikirim: " + JSON.stringify(response.data));
      navigate("/beasiswa/form-pendaftaran/document");
    } catch (error) {
      console.error("Gagal mengirim data:", error.response?.data || error.message);
      alert("Gagal mengirim data!");
    }
  };
  
  

  return (
    <main className="bg-white" style={{ fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif" }}>
      <div className="container-fluid bg-white py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <form className="px-4" onSubmit={handleSubmit}>
              <RegistrationHeader />

              <FormInput label="NIM" placeholder="type here" value={nim} onChange={(e) => setNim(e.target.value)} />
              <FormInput label="Nomor Regis" placeholder="type here" value={noRegistration} onChange={(e) => setNoRegistration(e.target.value)} />

              <FormInput
                label="Jurusan"
                placeholder="Select"
                isSelect={true}
                isMajorDropdown={true}
                value={majorId}
                onChange={(e) => setMajorId(e.target.value)}
              />

              <FormInput label="Alamat" placeholder="Type here" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
              <FormInput placeholder="Type here" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />

              <FormInput label="Asal Sekolah" placeholder="Type here" value={highSchoolName} onChange={(e) => setHighSchoolName(e.target.value)} />
              <FormInput label="Nama Ayah" placeholder="Type here" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
              <FormInput label="Nama Ibu" placeholder="Type here" value={motherName} onChange={(e) => setMotherName(e.target.value)} />

              <button type="submit" className="btn btn-success px-4 py-2 mt-5 fw-semibold">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FormPendaftaranKip;
