import React, { useState } from 'react';

function SubmitInvoice() {
  const [invoiceData, setInvoiceData] = useState({
    clientName: '',
    amount: '',
    status: '',
    date: '',
  });

  const handleChange = (e) => {
    setInvoiceData({
      ...invoiceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      });

      if (!response.ok) {
        throw new Error('Invoice submission failed');
      }

      const result = await response.json();
      console.log('Invoice submitted successfully:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="clientName"
        value={invoiceData.clientName}
        onChange={handleChange}
        placeholder="Client Name"
      />
      <input
        type="number"
        name="amount"
        value={invoiceData.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      <select name="status" value={invoiceData.status} onChange={handleChange}>
        <option value="Not Yet Started">Not Yet Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Successful">Successful</option>
      </select>
      <input
        type="date"
        name="date"
        value={invoiceData.date}
        onChange={handleChange}
      />
      <button type="submit">Submit Invoice</button>
    </form>
  );
}

export default SubmitInvoice;
