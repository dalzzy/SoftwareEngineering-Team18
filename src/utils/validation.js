// 이메일 형식 검사
export function validateEmail(email) {
  const re = /^[^@]+@[^@]+\.[^@]+$/;
  return re.test(email);
}

// 비밀번호: 6자 이상
export function validatePassword(password) {
  return password.length >= 6;
}

// 파이어베이스 인증 에러코드를 사용자 메시지로 변환
export function getFirebaseAuthErrorMessage(errorCode) {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return '이미 가입된 이메일입니다.';
    case 'auth/wrong-password':
      return '비밀번호가 일치하지 않습니다.';
    case 'auth/user-not-found':
      return '가입되지 않은 계정입니다.';
    default:
      return '알 수 없는 오류가 발생했습니다.';
  }
}
