"use client";
import React from "react";
import DocumentUploadHeader from "./DocumentUploadHeader";
import FileUploadField from "./UploadFileFields";


const FormPendaftaranDocumentKip = () => {
  return (
    <main
      className="bg-white"
      style={{
        fontFamily: "Onest, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      <div className="container-fluid bg-white py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <DocumentUploadHeader />
            <form>
              <FileUploadField label="Pass Foto *" />
              <FileUploadField label="Form Biodata A1 *" />
              <FileUploadField label="Form Keterampilan *" />
              <FileUploadField label="Surat Keterangan Tidak Mampu" />
              <FileUploadField label="Form Keterampilan *" />
              <FileUploadField label="Resume Pribadi *" />
              <FileUploadField label="Motivation Letter *" />
              <FileUploadField label="Surat Pernyataan sedang tidak menerima beasiswa lain *" />
              <FileUploadField label="Surat pernyataan bermetrai *" />
              <FileUploadField label="Fotocopy KTP *" />
              <FileUploadField label="Fotocopy KTM (ID Card) *" />
              <FileUploadField label="Kartu Hasil Study (Transkrip Nilai) *" />
              <button
                type="submit"
                className="btn btn-success mt-5 px-4 py-2 fw-semibold"
                >
                Submit
                </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormPendaftaranDocumentKip;
