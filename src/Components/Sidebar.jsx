import React from 'react'
import '../Styles/Sidebar.css'
import dashboard_icon from '../Data/icons/dashboard.png'
import history_icon from '../Data/icons/vertical.png';
import calender_icon from '../Data/icons/calendar.png';
import appointment_icon from '../Data/icons/calendar.png';
import statistics_icon from '../Data/icons/chat-bubble.png'
import chat_icon from '../Data/icons/chat-bubble.png'
import call_icon from '../Data/icons/call.png'
import settings_icon from '../Data/icons/setting.png'
import right_icon from '../Data/icons/right-arrow.png'
import { useState } from 'react';

const Sidebar = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <>
    <div className={`sidebar ${isVisible ? 'show' : ''}`}>
      <div className="container">
        <div className="general">
        <h6>General</h6>
        <div className="icon">
          <img src={dashboard_icon} alt="" />
          <en>Dashboard</en>
        </div>
        <div className="icon">
          <img src={history_icon} alt="" />
          <p>History</p>
        </div>
        <div className="icon">
          <img src={calender_icon} alt="" />
          <p>Calender</p>
        </div>
        <div className="icon">
          <img src={appointment_icon} alt="" />
          <p>Appointment</p>
        </div>
        <div className="icon">
          <img src={statistics_icon} alt="" />
          <p>Statistics</p>
        </div>
      </div>
      <div className="tools">
        <h6>Tools</h6>
        <div className="icon">
          <img src={chat_icon} alt="" />
          <p>Chat</p>
        </div>
        <div className="icon">
          <img src={call_icon} alt="" />
          <p>Support</p>
        </div>
      </div>
    </div>

      <div className="settings">
        <img src={settings_icon} alt="" />
        <p>Settings</p>
      </div>
    </div>
    <div>
      <img
        src={right_icon}
        alt="toggle"
        className="sidebar-toggle"
        onClick={toggleSidebar}
      />
    </div>
    </>
  )
}

export default Sidebar