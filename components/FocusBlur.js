import React, { useState } from 'react';
import food from '../assests/food.png'

function FocusBlur() {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Focus Demo */}
      <input
        type="text"
        placeholder="Click me!"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          padding: '12px 20px',
          borderRadius: '8px',
          border: `2px solid ${isFocused ? '#4f46e5' : '#ccc'}`,
          outline: 'none',
          transition: 'border 0.3s ease',
          fontSize: '16px',
          marginBottom: '40px'
        }}
      />

      <br />

      {/* Hover Blur Demo */}
      <p
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          fontSize: '20px',
          color: '#222',
          filter: isHovered ? 'blur(3px)' : 'none',
          transition: 'filter 0.3s ease',
          marginBottom: '20px'
        }}
      >
        Hover over this text to blur it
      </p>

      <img
        src={food}
        alt="Sample"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '200px',
          borderRadius: '12px',
          filter: isHovered ? 'blur(3px)' : 'none',
          transition: 'filter 0.3s ease'
        }}
      />
    </div>
  );
}

export default FocusBlur;
