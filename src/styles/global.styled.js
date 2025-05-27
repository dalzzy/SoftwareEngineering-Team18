import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`

 // Reset CSS
 ${reset}
 * {
    box-sizing: border-box;
    list-style: none;
    font-family: 'Pretendard', sans-serif;
  }

   #root {
    width: 100%;
    max-width: 430px;
    min-height: 100vh;
    background-color: #f0f8ff;
  }
  
  button {
    border: none;
    cursor: pointer;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/font/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

`;

const BarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-top: 1px solid #ddd;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

export default GlobalStyles;
