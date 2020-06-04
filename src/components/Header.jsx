import React from 'react';

export default function Header() {
  return (
    <header className="nav-header">
      <a className="logo" href="#hero">
        Kahil Nayton
      </a>
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        name="nav-toggle"
        value=""
      />

      <nav className="nav-menu">
        <ul>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}
