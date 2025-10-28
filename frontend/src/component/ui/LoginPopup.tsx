import * as React from 'react';
import { Dialog } from "@mui/material";
import { useUIStore } from "@States/uiStore"

export const LoginPopup = () => {
  const { isLoginPopupOpen, setLoginPopupOpen } = useUIStore();

  return (
    <Dialog open={isLoginPopupOpen} onClose={() => setLoginPopupOpen(!isLoginPopupOpen)}>
      Hello
    </Dialog>
  )
}