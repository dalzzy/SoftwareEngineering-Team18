// src/components/common/FriendsItem.jsx
import React from 'react';

const FriendsItem = ({ friend }) => {
  const handleClick = () => {
    alert(`🎉 ${friend.name}의 기념일은 ${friend.anniversary}입니다! 축하 메시지를 보냈습니다.`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '8px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <div>
        <strong>{friend.name}</strong>
        <div style={{ fontSize: '12px', color: '#555' }}>기념일: {friend.anniversary}</div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert(`🎉 ${friend.name}에게 축하 메시지를 보냈습니다!`);
        }}
        style={{
          padding: '6px 10px',
          backgroundColor: '#eee',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        축하하기
      </button>
    </div>
  );
};

export default FriendsItem;
