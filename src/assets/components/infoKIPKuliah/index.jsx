import React from "react";
import styles from "./infokipkuliah.module.css";

function InfoKIPKuliah() {
  return (
    <>
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <section className={styles.programHeader}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b33f6be9a89a152e217052e0a0e432bf1a0b9e2c?placeholderIfAbsent=true"
                        alt="KIP Kuliah Logo"
                        className={styles.programLogo}
                    />
                    <div className={styles.programInfo}>
                        <h2 className={styles.programTitle}>
                        Kartu Indonesia Pintar (KIP Kuliah)
                        </h2>
                        <div className={styles.buttonContainer}>
                        <button className={styles.registerButton}>Daftar</button>
                        </div>
                    </div>
                </section>

                <section className={styles.requirementsSection}>
                    <h3 className={styles.requirementsTitle}>
                        Persyaratan Penerimaan KIP Kuliah Merdeka 2022
                    </h3>
                    <div className={styles.requirementsContent}>
                        <p>
                        Pertama: Penerima KIP Kuliah Merdeka adalah lulusan Sekolah Menengah
                        Atas (SMA), Sekolah Menengah Kejuruan (SMK), atau bentuk lain yang
                        sederajat yang lulus pada tahun berjalan atau maksimal lulus 2 (dua)
                        tahun sebelumnya;
                        </p>

                        <p>Kedua</p>
                        <p>
                        Telah lulus seleksi penerimaan mahasiswa baru melalui semua jalur
                        masuk Perguruan Tinggi Akademik dan Perguruan Tinggi Vokasi dan
                        diterima di PTN atau PTS pada Program Studi yang telah terakreditasi
                        secara resmi dan tercatat pada sistem akreditasi nasional perguruan
                        tinggi.
                        </p>

                        <p>Ketiga</p>
                        <p>
                        Memiliki potensi akademik baik tetapi memiliki keterbatasan ekonomi
                        atau berasal dari keluarga miskin/rentan miskin dan/atau dengan
                        pertimbangan khusus yang didukung bukti dokumen yang sah;
                        </p>

                        <p>
                        Keterbatasan ekonomi sebagai syarat calon penerima KIP Kuliah Merdeka
                        dibuktikan dengan :
                        </p>
                        <p>
                        1. kepemilikan program bantuan pendidikan nasional dalam bentuk Kartu
                        Indonesia Pintar (KIP); atau
                        </p>
                        <p>
                        2. berasal dari keluarga peserta Program Keluarga Harapan (PKH); atau
                        </p>
                        <p>3. Keluarga pemegang Kartu Keluarga Sejahtera (KKS), atau</p>
                        <p>4. mahasiswa dari panti sosial/panti asuhan, atau</p>
                        <p>
                        5. mahasiswa dari keluarga yang masuk pada Data Terpadu Kesejahteraan
                        Sosial (DTKS).
                        </p>

                        <p>
                        Jika calon penerima tidak memenuhi salah satu dari 5 kriteria di atas,
                        maka dapat tetap mendaftar untuk mendapatkan KIP Kuliah Merdeka selama
                        memenuhi persyaratan tidak mampu secara ekonomi sesuai dengan
                        ketentuan, yang dibuktikan dengan pendapatan kotor gabungan orang
                        tua/wali paling banyak Rp 4.000.000,00 (empat juta rupiah) setiap
                        bulan atau pendapatan kotor gabungan orang tua/wali dibagi jumlah
                        anggota keluarga paling banyak Rp750.000,00 (tujuh ratus lima puluh
                        ribu rupiah)
                        </p>

                        <p>
                        Pembebasan biaya pendaftaran seleksi masuk perguruan tinggi (Ujian
                        Tulis Berbasis Komputer-UTBK) serta seleksi lain yang diusulkan oleh
                        masing-masing panitia dan perguruan tinggi bagi siswa yang memiliki
                        KIP atau terdaftar di Data Terpadu Kesejahteraan Sosial (DTKS)
                        Kementerian Sosial (Kemensos); Pembebasan biaya kuliah/pendidikan yang
                        dibayarkan langsung ke perguruan tinggi; Bantuan biaya hidup, mulai
                        tahun akademik 2021/2022 biaya hidup ditetapkan oleh Puslapdik
                        berdasarkan perhitungan besaran indeks harga lokal dari masing-masing
                        wilayah Perguruan Tinggi. Biaya hidup mahasiswa diberikan dalam 5
                        klaster wilayah dengan biaya hidup yaitu dari 800 ribu, 950 ribu, 1.1
                        juta, 1.25 juta dan 1.4 juta per bulan. Untuk melihat besaran biaya
                        hidup kota/kabupaten dimana kampus tujuan berada silahkan masuk ke SIM
                        KIP Kuliah.
                        </p>

                        <p>Program Regular:</p>
                        <p>Sarjana maksimal 8 (delapan) semester</p>
                        <p>Diploma Empat maksimal 8 (delapan) semester</p>
                        <p>Diploma Tiga maksimal 6 (enam) semester</p>
                        <p>Diploma Dua maksimal 4 (empat) semester</p>

                        <p>Program Profesi:</p>
                        <p>Dokter maksimal 4 (empat) semester</p>
                        <p>Dokter Gigi maksimal 4 (empat) semester</p>
                        <p>Dokter Hewan maksimal 4 (empat) semester</p>
                        <p>Ners maksimal 2 (dua) semester</p>
                        <p>Apoteker maksimal 2 (dua) semester</p>
                        <p>Guru maksimal 2 (dua) semester.</p>
                    </div>
                </section>
            </main>
        </div>
    </>
  );
}

export default InfoKIPKuliah;
