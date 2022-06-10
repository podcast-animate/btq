import React, { useRef, useEffect, useState, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import 'pages/LoadingScreen/LoadingScreen.css';

export const AvatarSelection = props => {

  return (
  <div>
    <Grid 
      container 
      spacing={0}
      direction="column"
      justifyContent="flex-end"
      sx={{
        height:'100vh',
        backgroundColor: '#FFE61B'
      }}
    >     
      <Grid item 
        sx={{
          zIndex:999,
          paddingBottom:10
        }}
      > 
        <Stack  
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          Hi
        </Stack>
      </Grid>
    </Grid></div>);
}