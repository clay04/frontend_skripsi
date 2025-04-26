import React from "react";
import BidangKemahasiswaanLayout from "../../components/BidangKemahasiswaanLayout";
import { StudentDetails } from "./StudentDetail";
import { ParentInformation } from "./ParentInformation";

const DataPendaftar = () => {
    return (
        <BidangKemahasiswaanLayout>
            <main className="container-fluid">
                <div className="row">
                <div className="col-md-6">
                    <StudentDetails />
                </div>
                <div className="col-md-6">
                    <ParentInformation />
                </div>
                </div>
            </main>
        </BidangKemahasiswaanLayout>
    )
}

export default DataPendaftar;