import React, { useState } from 'react';
import './Clients.css';

const Clients = () => {
  const [clients, setClients] = useState([
    { name: 'GeoStructures Ltd.', email: 'contact@geostructures.com', phone: '08012345678' },
    { name: 'NigerTech Engineering', email: 'info@nigertech.com', phone: '08023456789' },
    { name: 'AeroBuild Systems', email: 'projects@aerobuild.com', phone: '08134567890' },
    { name: 'HydroFlux Solutions', email: 'support@hydroflux.com', phone: '09012344321' },
    { name: 'Zenith Construct Ltd.', email: 'admin@zenithconstruct.com', phone: '07055667788' },
    { name: 'PrimeCore Engineering', email: 'hello@primecore.com', phone: '08111223344' },
    { name: 'Elevate Structures', email: 'elevate@structures.ng', phone: '08033445566' },
    { name: 'BlueLine Projects', email: 'office@blueline.ng', phone: '08122334455' },
    { name: 'Vertex Innovations', email: 'contact@vertexinnovations.com', phone: '08066778899' },
    { name: 'EcoForge Works', email: 'team@ecoforgeworks.com', phone: '09088997766' },
    { name: 'SteelBase Engineering', email: 'info@steelbase.com', phone: '07033442211' },
    { name: 'UrbanAxis Ltd.', email: 'connect@urbanaxis.com', phone: '08099887766' },
    { name: 'SkyGrid Projects', email: 'projects@skygrid.com', phone: '08122335577' },
    { name: 'PowerLink Systems', email: 'support@powerlink.com', phone: '08123444321' },
    { name: 'MetroBuild Africa', email: 'metro@buildafrica.com', phone: '09033445566' },
    { name: 'SolidEdge Contractors', email: 'office@solidedge.com', phone: '08187654321' },
    { name: 'TechForge Ltd.', email: 'info@techforge.com', phone: '08077665544' },
    { name: 'CoreAxis Technologies', email: 'core@axis.com', phone: '08109876543' },
    { name: 'GreenBrix Developers', email: 'green@brixdev.com', phone: '07099887766' },
    { name: 'NextGen Engineers', email: 'contact@nextgeneng.com', phone: '08111224455' }
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const addClient = (e) => {
    e.preventDefault();
    const newClient = { name, email, phone };
    setClients([...clients, newClient]);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="clients-page">
      <h2>Corporate Clients</h2>

      <form className="client-form" onSubmit={addClient}>
        <input
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Company Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Add Client</button>
      </form>

      <div className="client-list">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <div className="client-avatar">{client.name.charAt(0).toUpperCase()}</div>
            <div className="client-details">
              <h3>{client.name}</h3>
              <p>{client.email}</p>
              <p><strong>Phone:</strong> {client.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
