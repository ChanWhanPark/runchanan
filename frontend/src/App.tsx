import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

import { services } from './common/common';


function App() {
  // useNavigate
  const navigate = useNavigate();
  

  return (
    <div>
      <div>
      {services.map((service) => {
        return (
          <div key={service.id}>
            <Box sx={{ p: 2, borderRadius: 1 }}>
              <Typography>{service.title}</Typography>
              <Button onClick={() => navigate(service.route)}>이동하기</Button>
            </Box>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App
