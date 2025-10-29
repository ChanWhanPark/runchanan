import { Button } from '@mui/material';
import * as React from 'react';

const Pace = () => {
  const [activeTab, set_activeTab] = React.useState<string>('pace');
  return (
    <div>
      <div>
        <Button onClick={() => set_activeTab('pace')}>페이스 계산</Button>
      </div>
      <div>
        <Button onClick={() => set_activeTab('time')}>시간 계산</Button>
      </div>
    </div>
  );
};

export default Pace;