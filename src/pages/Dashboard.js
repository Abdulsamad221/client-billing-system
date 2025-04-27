import React from 'react';
import './Dashboard.css';
import invoices from './invoicesData'; 

const Dashboard = () => {
  const totalClients = new Set(invoices.map(invoice => invoice.clientName)).size;
  const totalIncome = invoices.reduce((sum, invoice) => sum + parseFloat(invoice.amount), 0);
  const ongoingProjects = invoices.filter(invoice =>
    invoice.status === 'In Progress' || invoice.status === 'Not Yet Started'
  ).length;
  const successfulProjects = invoices.filter(invoice => invoice.status === 'Successful').length;

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome to the Client Billing System</h1>
        <p>
          <strong>Musab Engineering Solutions Ltd.</strong> is a multi-service engineering firm offering 
          structural design, electrical installation, civil works, and project management services.
        </p>
      </div>

      <div className="stats-cards">
        <div className="card stat-card clients-card">
          <h3>Total Clients</h3>
          <p>{totalClients}</p>
        </div>
        <div className="card stat-card income-card">
          <h3>Total Income</h3>
          <p>₦{totalIncome.toLocaleString()}</p>
        </div>
        <div className="card stat-card ongoing-card">
          <h3>Ongoing Projects</h3>
          <p>{ongoingProjects}</p>
        </div>
        <div className="card stat-card success-card">
          <h3>Successful Projects</h3>
          <p>{successfulProjects}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
