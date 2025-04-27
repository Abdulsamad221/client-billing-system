import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Musab Engineering</h2>
        <p className="tagline">Client Billing System</p>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-item">🏠 Dashboard</Link>
        <Link to="/clients" className="nav-item">👥 Clients</Link>
        <Link to="/invoices" className="nav-item">📄 Invoices</Link>
        <Link to="/reports" className="nav-item">📊 Reports</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
