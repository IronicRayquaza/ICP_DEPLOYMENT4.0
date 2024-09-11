// src/SimplePage.js
import React from 'react';
import './App.css'; // Importing CSS for styling

function SimplePage() {
  return (
    <div className="simple-page">
      <header className="simple-header">
        <h1>Welcome to My Simple Webpage</h1>
      </header>
      <main className="simple-main">
        <p>This is a simple static webpage built with React.</p>
        <p>Feel free to customize and extend this page.</p>
      </main>
      <footer className="simple-footer">
        <p>© 2024 My Simple Webpage</p>
      </footer>
    </div>
  );
}

export default SimplePage;
