import React, { useState, useEffect } from 'react';
import clientsData from './clientsData';  // Import the client data
import invoicesData from './invoicesData';  // Import invoice data
import './Invoices.css';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [clients] = useState(clientsData); // Set the client list
  const [filter, setFilter] = useState('All');
  
  const [clientName, setClientName] = useState('');
  const [status, setStatus] = useState('Not Yet Started');
  const [amount, setAmount] = useState('');

  // Load initial invoice data into state
  useEffect(() => {
    setInvoices(invoicesData);  // Load invoices data into state
  }, []);

  // Filter invoices based on status
  const filteredInvoices = invoices.filter(inv =>
    filter === 'All' || inv.status === filter
  );

  // Handle adding a new invoice
  const handleAddInvoice = (e) => {
    e.preventDefault();
    if (!clientName || !amount) return;

    const newInvoice = {
      id: invoices.length + 1, // Generate a simple unique ID
      clientName,
      status,
      amount: parseFloat(amount),
    };

    // Add new invoice to the state
    setInvoices([...invoices, newInvoice]);

    // Clear form fields
    setClientName('');
    setStatus('Not Yet Started');
    setAmount('');
  };

  return (
    <div className="invoices-page">
      <h2>Service Invoices</h2>

      {/* Invoice entry form */}
      <form className="invoice-form" onSubmit={handleAddInvoice}>
        <select value={clientName} onChange={(e) => setClientName(e.target.value)} required>
          <option value="">Select Client</option>
          {clients.map((client, index) => (
            <option key={index} value={client.name}>
              {client.name}
            </option>
          ))}
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Not Yet Started">Not Yet Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Successful">Successful</option>
        </select>

        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Invoice</button>
      </form>

      {/* Filter section */}
      <div className="filter-section">
        <label>Filter by Status:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Not Yet Started">Not Yet Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Successful">Successful</option>
        </select>
      </div>

      {/* Invoices table */}
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Client</th>
            <th>Status</th>
            <th>Amount (₦)</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((inv, index) => (
              <tr key={index}>
                <td>{inv.id}</td>
                <td>{inv.clientName}</td>
                <td>{inv.status}</td>
                <td>{inv.amount.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No invoices found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
