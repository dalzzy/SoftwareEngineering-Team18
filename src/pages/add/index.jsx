// src/pages/add/index.jsx
import React from 'react';
import Header from '@/components/common/Header';
import BottomBar from '@/components/common/BottomBar';
import AnniversaryForm from '@/components/AnniversaryForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 80px;
  min-height: 100vh;
`;

const AddAnniversary = () => {
  return (
    <Wrapper>
      <Header title="기념일 추가" />
      <AnniversaryForm />
      <BottomBar />
    </Wrapper>
  );
};

export default AddAnniversary;
