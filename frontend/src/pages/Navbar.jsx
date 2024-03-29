import '../styles/Navbar.css';
import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';

function Navbar() {
  const showSettings = () => {};

  function logout() {
    localStorage.clear();
  }

  return (
    <nav>
      <Menu>
        <a id="home" className="menu-item" href="/calendarPage">
          My Calendar
        </a>

        <a id="habit-tracker" className="menu-item" href="/habitTracker">
          Habit Tracker
        </a>
        <a id="graphs" className="menu-item" href="/graphsPage">
          Graphs
        </a>

        <a id="year-in-a-glance" className="menu-item" href="/yearInAGlance">
          Year in a glance
        </a>

        <a id="profile" className="menu-item" href="/profile">
          Profile
        </a>

        <a id="logout" onClick={logout} className="menu-item" href="/">
          Logout
        </a>

        {/* <a
          onClick={() => showSettings()}
          className="menu-item--small"
          href="/"
        ></a> */}
      </Menu>
    </nav>
  );
}

export default Navbar;
