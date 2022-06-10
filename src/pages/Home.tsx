import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Input from 'components/Input';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as PIXI from 'pixi.js'
import { Stage, Sprite } from '@inlet/react-pixi'






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export function Home() {


  const divRef = useRef(null);

  const app = new PIXI.Application({
    width: 500, height: 500, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
  

const quote = "A beautiful travel saga of Dharma and his beloved Charlie ❤️\n#777CharlieInCinemas \n\nBook Your Tickets Now : https://t.co/fU0y37P0Ou \n\n@rakshitshetty @Kiranraj61 @PrithviOfficial @karthiksubbaraj @RanaDaggubati @PrithvirajProd @stonebenchers @SureshProdns @UFOMoviez @KRG_Studios";
const profilePic = "https://pbs.twimg.com/profile_images/1390508247564488711/nbL4gr9b_normal.jpg";
const textSample = new PIXI.Text(quote, {
  fontFamily: 'Snippet',
  fontSize: 16,
  fill: 'white',
  align: 'left',
});
textSample.position.set(20, 100);
app.stage.addChild(textSample);

  // load the texture we need
  app.loader.add('bunny', profilePic).load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);
  
    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;
  
    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
  
    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);

  });
  
  useEffect(() => { 
    const div = divRef.current
    if(div){
      console.log(div);
      div.innerHTML = '';
      div.append(app.view);
      
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App example with TypeScript
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2} columns={16}
      >
          <Grid item xs={16} width={{
                xs: 256,
                sm: 256,
                md: 512,
                lg: 512,
              }}>
            <Input/>
          </Grid>
          <Grid item xs={16} >
            <Box
            />
            <div 
      style={{
          position: 'relative',
          width:'200',
          height:'200',
      }}
      ref={divRef} />
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </Container>
  );
}