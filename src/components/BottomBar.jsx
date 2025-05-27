// src/components/common/BottomBar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@/assets/home.svg?react';
import BellIcon from '@/assets/bell.svg?react';
import CalendarIcon from '@/assets/calendar.svg?react';

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { path: '/home', icon: <HomeIcon />, label: '홈' },
    { path: '/upcoming', icon: <BellIcon />, label: '알림' },
    { path: '/anniversary/add', icon: <CalendarIcon />, label: '기념일 추가' },
  ];

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '60px',
        backgroundColor: '#fff',
        borderTop: '1px solid #ddd',
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => navigate(tab.path)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            color: location.pathname === tab.path ? '#000' : '#999',
          }}
        >
          {tab.icon}
          <span style={{ fontSize: '12px', marginTop: '4px' }}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomBar;
