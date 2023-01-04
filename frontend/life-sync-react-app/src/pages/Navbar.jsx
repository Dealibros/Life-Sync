import '../styles/Navbar.css';
import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function Navbar() {
  const showSettings = () => {};
  return (
    <nav>
      <Menu>
        <a id="home" className="menu-item" href="/calendarPage">
          My Calendar
        </a>

        <a id="habit-tracker" className="menu-item" href="/habit-tracker">
          Habit Tracker
        </a>
        <a id="patterns" className="menu-item" href="/patterns">
          Patterns
        </a>

        <a id="year-in-a-glance" className="menu-item" href="/year-in-a-glance">
          Year in a glance
        </a>

        <a id="profile" className="menu-item" href="/profile">
          Profile
        </a>

        <a onClick={() => showSettings()} className="menu-item--small" href="/">
          {/* Settings */}
        </a>
      </Menu>
    </nav>
  );
}

export default Navbar;
