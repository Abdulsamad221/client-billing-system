import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Invoices from './pages/Invoices';
import SubmitInvoice from './pages/SubmitInvoice';  // Import SubmitInvoice page
import Reports from './pages/Reports';  // Import Reports component
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar for navigation */}
        <Sidebar />
        <div className="main-content">
          <Routes>
            {/* Defining Routes for each page */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/submit-invoice" element={<SubmitInvoice />} /> {/* Add SubmitInvoice route */}
            <Route path="/reports" element={<Reports />} /> {/* Add the Reports route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
