function StudentInfo({ student }) {
  const fullName = `${student.masterUser?.lastName || "-"}, ${student.masterUser?.firstName || "-"}`;

  return (
    <section className="container-fluid mt-4">
      {/* NIM dan username */}
      <p className="text-secondary text-center fw-medium mb-4">
        {student.nim || "-"} / {student.noRegistration || "-"}
      </p>

      <div className="row g-4">
        {/* Kiri */}
        <div className="col-lg-8">
          <div className="text-center text-lg-start">
            <h2 className="h4 fw-bold mb-3">{fullName}</h2>
            <div className="mb-3">
              <h6 className="text-muted mb-1">Jurusan</h6>
              <p className="fw-semibold fs-6 mb-0">{student.major?.majorName || "-"}</p>
            </div>
            <div className="mb-3">
              <h6 className="text-muted mb-1">Fakultas</h6>
              <p className="fw-semibold fs-6 mb-0">{student.major?.faculty?.facultyName || "-"}</p>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className="col-lg-4 d-flex flex-column align-items-center align-items-lg-start">
          <div>
            <h6 className="text-muted mb-1">Beasiswa yang Diikuti</h6>
            <p className="fw-bold text-primary fs-5 mb-0">{student.scholarshipType || "-"}</p>
          </div>
          <div className="mt-2">
            <h6 className="text-muted mb-1">Tanggal Pendaftaran</h6>
            <p className="fw-bold text-success fs-6 mb-0">{formatDate(student.createdAt)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Format tanggal ke format yang lebih readable
function formatDate(dateString) {
  if (!dateString) return "-";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}

export default StudentInfo;