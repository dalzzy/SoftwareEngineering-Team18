import React, { useState } from 'react';
import styled from 'styled-components';
import FriendsItem from '@/components/FriendsItem';
import FriendModal from '@/components/FriendModal';
import Header from '@/components/common/Header';
import BottomBar from '@/components/common/BottomBar';
import SearchIcon from '@/assets/search.svg?react';

const mockFriends = [
  {
    id: 1,
    name: 'Alice',
    anniversary: '2025-06-05',
    anniversaries: [
      { type: '생일', date: '2025-06-05' },
      { type: '결혼기념일', date: '2025-06-11' },
    ],
  },
  {
    id: 2,
    name: 'Bob',
    anniversary: '2025-06-25',
    anniversaries: [{ type: '생일', date: '2025-06-25' }],
  },
  {
    id: 3,
    name: 'Charlie',
    anniversary: '2025-07-01',
    anniversaries: [
      { type: '생일', date: '2025-07-01' },
      { type: '졸업', date: '2025-02-15' },
    ],
  },
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

const Home = () => {
  const [search, setSearch] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredFriends = mockFriends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
    setIsModalOpen(true);
  };

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
      <div>
        {filteredFriends.map((friend) => (
          <FriendsItem key={friend.id} friend={friend} onClick={() => handleFriendClick(friend)} />
        ))}
      </div>

      {isModalOpen && selectedFriend && (
        <FriendModal friend={selectedFriend} onClose={() => setIsModalOpen(false)} />
      )}

      <BottomBar />
    </Wrapper>
  );
};

export default Home;
