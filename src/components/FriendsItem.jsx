// src/components/common/FriendsItem.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 16px;
`;

const Anniversary = styled.div`
  font-size: 12px;
  color: #555;
`;

const CongratsButton = styled.button`
  padding: 6px 10px;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const FriendsItem = ({ friend, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Info>
        <Name>{friend.name}</Name>
        <Anniversary>다가오는 기념일: {friend.anniversary}</Anniversary>
      </Info>
      <CongratsButton
        onClick={(e) => {
          e.stopPropagation();
          alert(`🎉 ${friend.name}님에게 축하 메시지를 보냈습니다!`);
        }}
      >
        축하하기
      </CongratsButton>
    </Container>
  );
};

export default FriendsItem;
