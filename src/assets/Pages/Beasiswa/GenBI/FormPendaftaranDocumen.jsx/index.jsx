import React from "react";
import DocumentUploadHeader from "./DocumentUploadHeader";
import FileUploadField from "./UploadFileFields";
import axios from "axios";

const FormPendaftaranDocumentGenBI = () => {
  const [files, setFiles] = React.useState({});

  const handleFileChange = (e, name) => {
    setFiles((prev) => ({
      ...prev,
      [name]: e.target.files[0],
    }));
  };

  const [uploading, setUploading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
  
    try {
      const user = JSON.parse(localStorage.getItem("user")); // Ambil user dari localStorage
      const uploadedBy = user?.user?.uuid; // Ambil UUID user
  
      if (!uploadedBy) {
        alert("Gagal menemukan UUID user. Silakan login ulang.");
        setUploading(false);
        return;
      }
  
      for (const [category, file] of Object.entries(files)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("category", category);
        formData.append("uploadedBy", uploadedBy); // <-- gunakan UUID
  
        await axios.post("http://localhost:9900/sms-mgmt/document/upload", formData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
  
        console.log(`${category} uploaded`);
      }
      alert("Seluruh dokumen berhasil diunggah.");
    } catch (err) {
      console.error("Upload gagal", err);
      alert("Terjadi kesalahan saat mengunggah dokumen.");
    } finally {
      setUploading(false);
    }
  };  


  return (
    <main className="bg-white">
      <div className="container-fluid bg-white py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <DocumentUploadHeader />
            <form onSubmit={handleSubmit}>
              <FileUploadField label="Pass Foto *" onChange={(e) => handleFileChange(e, "Pass Foto")} />
              <FileUploadField label="Form Biodata A1 *" onChange={(e) => handleFileChange(e, "Form Biodata A1")} />
              <FileUploadField label="Form Keterampilan *" onChange={(e) => handleFileChange(e, "Form Keterampilan")} />
              <FileUploadField label="Surat Keterangan Tidak Mampu" onChange={(e) => handleFileChange(e, "Surat Keterangan Tidak Mampu")} />
              <FileUploadField label="Resume Pribadi *" onChange={(e) => handleFileChange(e, "Resume Pribadi")} />
              <FileUploadField label="Motivation Letter *" onChange={(e) => handleFileChange(e, "Motivation Letter")} />
              <FileUploadField label="Surat Pernyataan sedang tidak menerima beasiswa lain *" onChange={(e) => handleFileChange(e, "Surat Pernyataan Tidak Menerima Beasiswa Lain")} />
              <FileUploadField label="Surat Pernyataan Bermetrai *" onChange={(e) => handleFileChange(e, "Surat Pernyataan Bermetrai")} />
              <FileUploadField label="Fotocopy KTP *" onChange={(e) => handleFileChange(e, "Fotocopy KTP")} />
              <FileUploadField label="Fotocopy KTM *" onChange={(e) => handleFileChange(e, "Fotocopy KTM")} />
              <FileUploadField label="Transkrip Nilai *" onChange={(e) => handleFileChange(e, "Transkrip Nilai")} />

              <button type="submit" className="btn btn-success mt-5 px-4 py-2 fw-semibold" disabled={uploading}>
                {uploading ? "Mengunggah..." : "Submit"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormPendaftaranDocumentGenBI;
