import { RouterProvider } from 'react-router-dom';
import router from '@/routes/route';
import GlobalStyles from '@/styles/global.styled';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme.styled';
import { AuthProvider } from '@/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
