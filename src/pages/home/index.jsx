// src/pages/home/index.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import FriendsItem from '@/components/FriendsItem';
import Header from '@/components/common/Header';
import BottomBar from '@/components/BottomBar';
import SearchIcon from '@/assets/search.svg?react';

const mockFriends = [
  { id: 1, name: 'Alice', anniversary: '2024-06-20' },
  { id: 2, name: 'Bob', anniversary: '2024-06-25' },
  { id: 3, name: 'Charlie', anniversary: '2024-07-01' },
];

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 80px;
  min-height: 100vh;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin: 16px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
`;

const ListWrapper = styled.div``;

const Home = () => {
  const [search, setSearch] = useState('');
  const filteredFriends = mockFriends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Wrapper>
      <Header title="친구 목록" />
      <SearchBox>
        <SearchIcon style={{ marginRight: '8px' }} />
        <SearchInput
          type="text"
          placeholder="친구 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBox>
      <ListWrapper>
        {filteredFriends.map((friend) => (
          <FriendsItem key={friend.id} friend={friend} />
        ))}
      </ListWrapper>
      <BottomBar />
    </Wrapper>
  );
};

export default Home;
