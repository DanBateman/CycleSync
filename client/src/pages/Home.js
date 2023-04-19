import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import Week from '../components/home/week';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 80,
  width: 80,
  m: 0.1,
  borderStyle: 'solid',
  borderWidth: '2px',
  // transition: "all .1s ease-in-out",
  // "&:hover": {
  //   transform: "scale(1.02)",
  // },
};

const HomePage = () => {
  const today = new Date();
  const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        my: 'auto',
        height: '100%',
      }}
    >
      <Typography variant="h6">Current Phase</Typography>
      <Box
        // elevation={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          my: 2,
          height: '350px',
          width: '350px',
          borderRadius: '50%',
          // #f58c90
          boxShadow: '7px -7px 5px black, -1px -5px 5px black, 5px 1px 5px black',
          '@keyframes myEffect': {
            '0%': {
              boxShadow: '7px -7px 5px black, -1px -5px 5px black, 5px 1px 5px black',
            },
            '100%': {
              boxShadow: '-7px 7px 5px black, 1px 5px 5px black, -5px -1px 5px black',
            },
          },
          animation: 'myEffect .5s linear .2s 1 normal',
          animationFillMode: 'forwards',
        }}
      >
        <Typography variant="h4">MENSES</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexWrap: 'wrap' }}
      >
        <Week label={'Look Back'} date={lastWeek} />
        <Week label={'Look Ahead'} date={today} />
      </Box>
    </Box>
  );
};

export default HomePage;
