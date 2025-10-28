import * as React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useAuthStore } from '@States/authStore';
import { useUIStore } from '@States/uiStore';
import { LoginPopup } from './LoginPopup';

export default function AppToolbar() {
  // Login State
  const { isLoggedIn } = useAuthStore();
  const { isLoginPopupOpen, setLoginPopupOpen } = useUIStore();

  const LoginSection = (
    <Button onClick={() => setLoginPopupOpen(!isLoginPopupOpen)}>Login</Button>
  )
  return (
    <>
      <AppBar position='relative' sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, top: 8, right: 8, position: 'absolute' }}>
            {isLoggedIn ? null : LoginSection}
          </Box>
        </Toolbar>
      </AppBar>
      <LoginPopup />
    </>
  );
}