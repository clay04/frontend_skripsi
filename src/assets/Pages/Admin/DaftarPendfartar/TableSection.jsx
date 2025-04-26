"use client";
import React from "react";

function TableSection() {
  return (
    <section className="mb-0 mt-0">
      <div className="table-responsive">
        <table className="table table-sm">
          <thead className="bg-light">
            <tr className="small">
              <th className="py-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/42f0d0569014cf4076eb563075f49ed7f10a6b1a?placeholderIfAbsent=true" alt="" style={{ width: "12px" }} />
              </th>
              <th className="py-2 d-flex align-items-center gap-1">
                #
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/c16dc0a46a3fd7ff1823cf94fd678839e436406f?placeholderIfAbsent=true" alt="Sort" style={{ width: "12px" }} />
              </th>
              <th className="py-2 d-flex align-items-center gap-1">
                Nama Lengkap
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/c16dc0a46a3fd7ff1823cf94fd678839e436406f?placeholderIfAbsent=true" alt="Sort" style={{ width: "12px" }} />
              </th>
              <th className="py-2">NIM</th>
              <th className="py-2">Fakultas</th>
              <th className="py-2">Jurusan</th>
              <th className="py-2">Beasiswa</th>
              <th className="py-2">Tanggal</th>
            </tr>
          </thead>
          <tbody className="small">
            <tr>
              <td className="py-1">
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/0475a699f051b85d37fc6cfbe257ab03f01e4c0b?placeholderIfAbsent=true" alt="" style={{ width: "12px" }} />
              </td>
              <td className="py-1">1</td>
              <td className="py-1">Mendes, Camilla Lovenia Monalisa Claudia</td>
              <td className="py-1">105011050808</td>
              <td className="py-1">Fakultas Ilmu Komputer</td>
              <td className="py-1">Sistem Informasi</td>
              <td className="py-1">GenBI</td>
              <td className="py-1">09-April-2025</td>
            </tr>
            <tr>
              <td className="py-1">
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/fef836e54bf56bd011dd762e7967e9c44549ee61?placeholderIfAbsent=true" alt="" style={{ width: "12px" }} />
              </td>
              <td className="py-1">2</td>
              <td className="py-1">Sheren, Ed</td>
              <td className="py-1">102022337864</td>
              <td className="py-1">Fakultas Ekonomi dan Bisnis</td>
              <td className="py-1">Akuntansi</td>
              <td className="py-1">GenBI</td>
              <td className="py-1">10-April-2025</td>
            </tr>
            <tr>
              <td className="py-1">
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/67229a78890d693d202ed2afe10fec68854874ca?placeholderIfAbsent=true" alt="" style={{ width: "12px" }} />
              </td>
              <td className="py-1">3</td>
              <td className="py-1">Marie, Anna</td>
              <td className="py-1">102021349865</td>
              <td className="py-1">Fakultas Keperawatan</td>
              <td className="py-1">Perawat</td>
              <td className="py-1">KIP Kuliah</td>
              <td className="py-1">10-April-2025</td>
            </tr>
            <tr>
              <td className="py-1">
                <img src="https://cdn.builder.io/api/v1/image/assets/6e56f22283ca426d8ccf6afbc1731b56/67229a78890d693d202ed2afe10fec68854874ca?placeholderIfAbsent=true" alt="" style={{ width: "12px" }} />
              </td>
              <td className="py-1">3</td>
              <td className="py-1">Grando, Arianne</td>
              <td className="py-1">102021349865</td>
              <td className="py-1">Fakultas Keperawatan</td>
              <td className="py-1">Perawat</td>
              <td className="py-1">KIP Kuliah</td>
              <td className="py-1">10-April-2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TableSection;
