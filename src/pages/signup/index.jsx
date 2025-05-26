import styled from 'styled-components';
import LogoIcon from '@/assets/logo.svg?react';
import Button from '@/components/Button/Button.jsx';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20vh 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const Signup = () => {
  return (
    <Wrapper>
      <LogoIcon style={{ width: 320, height: 260 }} />
      <ButtonWrapper>
        <Button variant="primary" size="lg" fullWidth>
          로그인
        </Button>
        <Button variant="secondary" size="lg" fullWidth>
          회원가입
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Signup;
