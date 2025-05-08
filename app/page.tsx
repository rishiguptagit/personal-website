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
                objectPosition: "center 20%",
                transform: "scale(1.2)",
                transformOrigin: "center",
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
            San Francisco, CA
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={darkMode ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={darkMode ? 'white' : 'black'}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={darkMode ? 'white' : 'black'}>
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={darkMode ? 'white' : 'black'}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
