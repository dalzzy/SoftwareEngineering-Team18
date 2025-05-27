// src/components/UpcomingItem.jsx
import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Detail = styled.div`
  font-size: 14px;
  color: #555;
`;

const UpcomingItem = ({ item }) => {
  return (
    <ItemWrapper>
      <Info>
        <Name>{item.name}</Name>
        <Detail>
          {item.type} - {item.date}
        </Detail>
      </Info>
    </ItemWrapper>
  );
};

export default UpcomingItem;
