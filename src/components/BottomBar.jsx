// src/components/common/BottomBar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@/assets/home.svg?react';
import BellIcon from '@/assets/bell.svg?react';
import CalendarIcon from '@/assets/calendar.svg?react';

const BarWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const BarInner = styled.div`
  width: 100%;
  max-width: 370px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TabButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  color: ${({ active }) => (active ? '#000' : '#999')};
`;

const Label = styled.span`
  font-size: 12px;
  margin-top: 4px;
`;

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { path: '/home', icon: <HomeIcon />, label: '홈' },
    { path: '/anniversary/add', icon: <CalendarIcon />, label: '기념일 추가' },
    { path: '/upcoming', icon: <BellIcon />, label: '알림' },
  ];

  return (
    <BarWrapper>
      <BarInner>
        {tabs.map((tab) => (
          <TabButton
            key={tab.path}
            onClick={() => navigate(tab.path)}
            active={location.pathname === tab.path}
          >
            {tab.icon}
            <Label>{tab.label}</Label>
          </TabButton>
        ))}
      </BarInner>
    </BarWrapper>
  );
};

export default BottomBar;
