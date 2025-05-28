// src/components/AnniversaryForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AnniversaryForm = () => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !type) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    await addDoc(collection(db, 'anniversaries'), {
      uid: user.uid,
      name: user.displayName,
      date,
      type,
    })
      .then(() => {
        alert(`기념일이 등록되었습니다.\n유형: ${type}\n날짜: ${date}`);
        setDate('');
        setType('');
      })
      .catch((e) => {
        console.log(e);
        alert('기념일 등록에 실패했습니다.');
      });
  };

  return (
    <FormContainer as="form" onSubmit={handleSubmit}>
      <div>
        <Label>날짜</Label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <Label>기념일 종류</Label>
        <Input
          type="text"
          placeholder="예: 생일, 결혼기념일"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <Button variant="primary" fullWidth>
        등록하기
      </Button>
    </FormContainer>
  );
};

export default AnniversaryForm;
