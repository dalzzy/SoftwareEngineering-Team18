// src/pages/upcoming/index.jsx
import React from 'react';
import styled from 'styled-components';
import Header from '@/components/common/Header';
import BottomBar from '@/components/common/BottomBar';
import UpcomingItem from '@/components/UpcomingItem';

const mockUpcoming = [
  { id: 1, name: 'Alice', type: '생일', date: '2024-06-20' },
  { id: 2, name: 'Charlie', type: '결혼기념일', date: '2024-06-21' },
  { id: 3, name: '나', type: '생일', date: '2024-06-22' },
];

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 80px;
  min-height: 100vh;
`;

const Upcoming = () => {
  return (
    <Wrapper>
      <Header title="다가오는 일정" />
      <div>
        {mockUpcoming.map((item) => (
          <UpcomingItem key={item.id} item={item} />
        ))}
      </div>
      <BottomBar />
    </Wrapper>
  );
};

export default Upcoming;
