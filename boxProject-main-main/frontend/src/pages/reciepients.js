import React, { useState } from 'react';

const PairingPage = () => {
  // Let's assume these are fetched from your backend or state management store
  const sponsors = [
    { id: 1, name: 'Sponsor A' },
    { id: 2, name: 'Sponsor B' },
    // ... other sponsors
  ];
  const recipients = [
    { id: 1, name: 'Recipient X' },
    { id: 2, name: 'Recipient Y' },
    // ... other recipients
  ];

  // States to hold the currently selected sponsor and recipient
  const [selectedSponsor, setSelectedSponsor] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');

  // Function to handle pairing
  const handlePairing = (e) => {
    e.preventDefault();
    // Logic to pair the selected sponsor with the selected recipient
    console.log(`Pairing Sponsor ${selectedSponsor} with Recipient ${selectedRecipient}`);
    // Reset the selection
    setSelectedSponsor('');
    setSelectedRecipient('');
  };

  return (
    <div className="content-body">
      <h1>Pair Recipient/Sponsors</h1>
      <p>
        {/* Your text here */}
      </p>
      <form onSubmit={handlePairing}>
        <label>
          Select Sponsor:
          <select value={selectedSponsor} onChange={e => setSelectedSponsor(e.target.value)}>
            <option value="">--Select Sponsor--</option>
            {sponsors.map(sponsor => (
              <option key={sponsor.id} value={sponsor.name}>{sponsor.name}</option>
            ))}
          </select>
        </label>
        
        <label>
          Select Recipient:
          <select value={selectedRecipient} onChange={e => setSelectedRecipient(e.target.value)}>
            <option value="">--Select Recipient--</option>
            {recipients.map(recipient => (
              <option key={recipient.id} value={recipient.name}>{recipient.name}</option>
            ))}
          </select>
        </label>
        
        <button type="submit">Pair the Families</button>
      </form>
    </div>
  );
};

export default PairingPage;