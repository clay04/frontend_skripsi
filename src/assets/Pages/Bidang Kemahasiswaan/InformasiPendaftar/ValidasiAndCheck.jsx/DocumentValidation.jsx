export default function DocumentValidation() {
    return (
      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 fw-bold m-0">Cek Dokumen</h2>
          <div className="d-flex gap-2">
            <span>Status</span>
            <span>:</span>
            <span className="text-danger">Tidak Lengkap</span>
          </div>
        </div>
  
        <div className="list-group border-0">
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Form Biodata A1</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Form Keterampilan</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Surat Keterangan Tidak Mampu</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Resume Pribadi</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Motivation Letter</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Surat Pernyataan sedan tidak menerima beasiswa lain</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Surat pernyataan bermetrai</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Fotocopy KTP</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Fotocopy KTM (ID Card)</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>IPK Semester terakhir</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
  
          <div className="list-group-item border-0 bg-transparent d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <span>Kartu hasil studi (Transkrip Nilai)</span>
            </div>
            <div className="d-flex gap-3">
              <span>:</span>
              <span className="text-muted">Tidak ada File</span>
            </div>
          </div>
        </div>
  
        <button className="btn btn-success rounded-pill px-5 mt-5">
          Selesai
        </button>
      </section>
    );
  }
  