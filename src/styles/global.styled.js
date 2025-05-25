import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
    background-color: #fff;
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

export default GlobalStyles;
