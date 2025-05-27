import Input from '@/components/common/Input.jsx';
import Button from '@/components/common/Button.jsx';
import { useState } from 'react';
import Header from '@/components/common/Header.jsx';
import { validateEmail, validatePassword, validateName } from '@/utils/validation.js';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      valid = false;
    } else {
      setEmailError('');
    }
    if (!validatePassword(password)) {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      valid = false;
    } else {
      setPasswordError('');
    }
    if (!validateName(name)) {
      setNameError('이름은 2글자 이상이어야 합니다.');
      valid = false;
    } else {
      setNameError('');
    }
    if (!valid) return;
    alert('가입이 완료되었습니다!');
    nav('/');
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: 320,
          margin: '0 auto',
          marginTop: '20vh',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 24, fontSize: 32, fontWeight: 700 }}>
          Signup
        </h2>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div style={{ color: 'red', fontSize: 14 }}>{emailError}</div>}
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div style={{ color: 'red', fontSize: 14 }}>{passwordError}</div>}
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div style={{ color: 'red', fontSize: 14 }}>{nameError}</div>}
        <Button type="submit" variant="primary" size="lg" fullWidth>
          회원가입
        </Button>
      </form>
    </>
  );
};

export default Signup;
