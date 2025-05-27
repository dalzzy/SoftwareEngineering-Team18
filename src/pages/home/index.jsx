import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsItem from '@/components/FriendsItem';
import FriendModal from '@/components/FriendModal';
import Header from '@/components/common/Header';
import BottomBar from '@/components/common/BottomBar';
import SearchIcon from '@/assets/search.svg?react';
import { db, auth } from '@/services/firebase';
import { collection, getDocs } from 'firebase/firestore';

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
  const [anniversaries, setAnniversaries] = useState([]);

  useEffect(() => {
    const fetchAnniversaries = async () => {
      try {
        // 유저 로그인 검증
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.error('No user logged in');
          return;
        }

        // 기념일 데이터 조회
        const querySnapshot = await getDocs(collection(db, 'anniversaries'));
        const userAnniversaries = {};

        querySnapshot.docs.forEach((doc) => {
          const data = doc.data();
          if (!userAnniversaries[data.uid]) {
            userAnniversaries[data.uid] = {
              id: data.uid,
              name: data.name,
              anniversaries: [],
            };
          }
          userAnniversaries[data.uid].anniversaries.push({
            type: data.type,
            date: data.date,
          });
        });

        // 기념일 데이터 정렬
        const anniversaryData = Object.values(userAnniversaries).map((user) => {
          const sortedAnniversaries = user.anniversaries.sort(
            (a, b) => new Date(a.date) - new Date(b.date),
          );
          const nextAnniversary =
            sortedAnniversaries.find((a) => new Date(a.date) >= new Date()) ||
            sortedAnniversaries[0];

          return {
            ...user,
            anniversary: nextAnniversary?.date,
          };
        });

        setAnniversaries(anniversaryData);
      } catch (error) {
        console.error('Error fetching anniversaries:', error);
      }
    };

    fetchAnniversaries();
  }, []);

  const filteredFriends = anniversaries.filter((friend) =>
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
