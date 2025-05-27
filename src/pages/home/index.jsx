// src/pages/home/index.jsx
import React, { useState } from 'react';
import FriendsItem from '@/components/FriendsItem';
import Header from '@/components/common/Header';
import BottomBar from '@/components/BottomBar';
import SearchIcon from '@/assets/search.svg?react';

const mockFriends = [
  { id: 1, name: 'Alice', anniversary: '2024-06-20' },
  { id: 2, name: 'Bob', anniversary: '2024-06-25' },
  { id: 3, name: 'Charlie', anniversary: '2024-07-01' },
];

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredFriends = mockFriends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Header title="친구 목록" />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          marginTop: '12px',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      >
        <SearchIcon style={{ marginRight: '8px' }} />
        <input
          type="text"
          placeholder="친구 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, border: 'none', outline: 'none' }}
        />
      </div>

      <div style={{ padding: '12px' }}>
        {filteredFriends.map((friend) => (
          <FriendsItem key={friend.id} friend={friend} />
        ))}
      </div>

      <BottomBar />
    </div>
  );
};

export default Home;
