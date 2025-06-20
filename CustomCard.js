import React from 'react';

const CustomCard = ({ title, content }) => (
  <div style={{
    border: '1px solid #ccc', padding: '15px', margin: '10px 0',
    borderRadius: '8px', backgroundColor: '#f9f9f9'
  }}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default CustomCard;
