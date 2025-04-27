import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  // Dynamic data
  const [reportData] = useState({
    totalIncome: 2140000,
    activeClients: 18,
    completedProjects: 10,
    pendingPayments: 500000,
  });

  return (
    <div className="report-container">
      <h2 className="report-title">Company Financial & Progress Report</h2>

      <div className="report-summary">
        <div className="summary-item">
          <h3>Total Income</h3>
          <p className="report-value">₦{reportData.totalIncome.toLocaleString()}</p>
        </div>

        <div className="summary-item">
          <h3>Active Clients</h3>
          <p className="report-value">{reportData.activeClients}</p>
        </div>

        <div className="summary-item">
          <h3>Completed Projects</h3>
          <p className="report-value">{reportData.completedProjects}</p>
        </div>

        <div className="summary-item">
          <h3>Pending Payments</h3>
          <p className="report-value">₦{reportData.pendingPayments.toLocaleString()}</p>
        </div>
      </div>

      <div className="report-details">
        <h3>Detailed Overview</h3>
        <ul>
          <li><strong>Clients Overview:</strong> Active clients are tracked in real-time, showing progress on their respective projects.</li>
          <li><strong>Financial Summary:</strong> The total income is calculated based on service charges and completed projects.</li>
          <li><strong>Project Completion:</strong> The number of completed projects reflects the efficiency and satisfaction of service delivery.</li>
          <li><strong>Pending Payments:</strong> These are the payments expected from clients for services rendered.</li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
