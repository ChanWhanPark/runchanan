import * as React from 'react';
import { Box, Button, Dialog, DialogContent, TextField } from "@mui/material";
import { useUIStore } from "@States/uiStore"

export const LoginPopup = () => {
  const { isLoginPopupOpen, setLoginPopupOpen } = useUIStore();

  const ContentSection = (
    <DialogContent>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField label="Email" placeholder='로그인 ID' />
        <TextField label="Password" type="password" placeholder='비밀번호' />
        <Button variant='contained'> Sign In </Button>
      </Box>
    </DialogContent>
  );
  return (
    <Dialog open={isLoginPopupOpen} onClose={() => setLoginPopupOpen(!isLoginPopupOpen)}>
      {ContentSection}
    </Dialog>
  )
}