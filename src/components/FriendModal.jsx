import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  max-width: 320px;
  width: 90%;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const CloseButton = styled.button`
  margin-top: 16px;
  padding: 6px 12px;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FriendModal = ({ friend, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>{friend.name}의 기념일</Title>
        <List>
          {friend.anniversaries.map((anniv, index) => (
            <ListItem key={index}>
              {anniv.type}: {anniv.date}
            </ListItem>
          ))}
        </List>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default FriendModal;
