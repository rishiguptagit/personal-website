'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // No longer checking system preference, always start with light mode
    setDarkMode(false);
    localStorage.setItem('darkMode', 'false');
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const bgColor = darkMode ? '#1a1a1a' : 'white';
  const textColor = darkMode ? 'white' : 'black';

  return (
    <div
      className="container flex"
      style={{
        display: "flex",
        justifyContent: "center", // Centers the container horizontally
        alignItems: "center", // Centers the container vertically
        minHeight: "100vh", // Makes the container take the full viewport height
        width: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <button 
        onClick={toggleDarkMode}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          border: 'none',
          borderRadius: '20px',
          padding: '8px 16px',
          cursor: 'pointer',
          color: textColor,
          fontWeight: 'bold',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="content" style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ marginBottom: "16px" }}>
            <img
              src="/pfp.jpeg"
              alt="Rishi Gupta"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "0",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{ fontWeight: 600, marginBottom: "6px", fontSize: "18px" }}
            className="name"
          >
            Rishi Gupta
          </div>
          <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
            <span role="img" aria-label="Location">📍</span>
            <a 
              href="https://www.google.com/maps/place/San+Luis+Obispo,+CA/@35.2722916,-120.7116797,13z/data=!3m1!4b1!4m6!3m5!1s0x80ece6be7b6cc227:0xbc0290c2ceef0f46!8m2!3d35.2827524!4d-120.6596156!16zL20vMHI1bHo?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: darkMode ? '#63b3ed' : 'inherit' }}
            >
              San Luis Obispo, CA, USA
            </a>
          </div>
          <div style={{ marginBottom: "16px", fontSize: "14px", maxWidth: "550px" }}>
            I'm a software engineer focused on building innovative solutions to real-world problems. I want to build products that help people live better lives.
            I hold a Bachelor of Science in Computer Science from Cal Poly San Luis Obispo. Concurrently, I'm building an AI-powered healthcare platform, UniHealth.
            Previously, I interned at Amazon Web Services (AWS) and SpaceX.
          </div>
          <div style={{ marginBottom: "6px", fontSize: "14px" }}>
            Incoming Software Development Engineer at{" "}
            <a
              href="http://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ fontWeight: "bold" }}>
                Amazon Web Services (AWS)
              </span>
            </a>
          </div>
          <div style={{ marginBottom: "6px", fontSize: "14px" }}>
            Founder at{" "}
            <a
              href="http://myunihealth.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>UniHealth</strong>
            </a>
          </div>
          <div style={{ marginBottom: "6px", fontSize: "14px" }}>
            Previously:{" "}
            <a
              href="http://spacex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>SpaceX</strong>
            </a>
            {" "}
            <a
              href="http://calpoly.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Cal Poly</strong>
            </a>
          </div>

          <div style={{ marginTop: "16px", display: "flex", gap: "16px" }}>
            <a
              href="mailto:rishigupta.personal@gmail.com"
              rel="noopener noreferrer"
              aria-label="Email"
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none'
              }}
              className="social-link"
            >
              <span style={{ fontSize: "20px" }}>📧</span>
            </a>
            <a
              href="https://x.com/rishiguptaca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none'
              }}
              className="social-link"
            >
              <span style={{ fontSize: "20px" }}>𝕏</span>
            </a>
            <a
              href="https://linkedin.com/in/rishiguptalink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none'
              }}
              className="social-link"
            >
              <span style={{ fontSize: "20px" }}>🔗</span>
            </a>
            <a
              href="https://github.com/rishiguptagit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none'
              }}
              className="social-link"
            >
              <span style={{ fontSize: "20px" }}>💻</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
