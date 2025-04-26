import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatCard from '../components/StatCard';
import AdminLayout from '../components/AdminLayout';
import "./dashboard-admin.css";

const DashboardAdmin = () => {
  return (
    <AdminLayout>
      <h1 className="fs-3 fw-bold mb-4">Dashboard</h1>
      
      <Row>
        <Col xs={12} md={6} lg={3}>
          <StatCard title="Beasiswa Aktif" value={2} unit="beasiswa" />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <StatCard title="Jumlah Pendaftaran" value={150} unit="orang" />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <StatCard title="Pendaftar lolos Seleksi" value={75} unit="orang" />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <StatCard title="Pendaftar Belum diverifikasi" value={75} unit="orang" />
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default DashboardAdmin;