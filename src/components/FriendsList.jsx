import React from 'react';
import FriendsItem from './FriendsItem';

// 홈페이지 - 친구목록 리스트
const FriendsList = ({ friends }) => {
  return (
    <div>
      {friends.map((friend) => (
        <FriendsItem key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
