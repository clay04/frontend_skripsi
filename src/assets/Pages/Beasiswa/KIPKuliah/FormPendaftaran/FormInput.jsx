"use client";
import React from "react";

export const FormInput = ({
  label,
  type = "text",
  placeholder,
  isSelect,
  className = "",
  value,
  onChange,
  readOnly = false,
  isMajorDropdown = false,
}) => {
  const hardcodedMajors = [
    { uuid: "247ab467-ace0-4228-9877-1c62c5bcf950", name: "Sistem Informasi" },
    { uuid: "uuid-002", name: "Informatika" },
    { uuid: "uuid-003", name: "Manajemen" },
    { uuid: "uuid-004", name: "Akuntansi" },
    { uuid: "uuid-005", name: "Keperawatan" },
    // tambahkan sesuai kebutuhan
  ];

  return (
    <div className={`form-group mb-4 ${className}`}>
      <label className="form-label fs-4">{label}</label>

      {isSelect ? (
        isMajorDropdown ? (
          <select
            className="form-select p-2"
            value={value}
            onChange={onChange}
          >
            <option value="">{placeholder}</option>
            {hardcodedMajors.map((major) => (
              <option key={major.uuid} value={major.uuid}>
                {major.name}
              </option>
            ))}
          </select>
        ) : (
          <select
            className="form-select p-2"
            value={value}
            onChange={onChange}
          >
            <option value="">{placeholder}</option>
            <option value="KIP">KIP</option>
            <option value="GenBI">GenBI</option>
          </select>
        )
      ) : (
        <input
          type={type}
          className="form-control p-2"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};
