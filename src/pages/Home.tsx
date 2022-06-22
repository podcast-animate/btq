import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Input from 'components/Input';
import Grid from '@mui/material/Grid';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
import { useSearchParams } from 'react-router-dom';
import {Post, getTweet} from '../service';



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
  const [postUrl, setPostUrl] = useState("https://twitter.com/ohlibyuh/status/1536502728376999936");
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [post, setPost] = useState<Post>();

  const stageRef = React.useRef(null);

  // function from https://stackoverflow.com/a/15832662/512042
  const downloadURI=(uri:string, name:string)=> {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, 'btq.png');
  };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      getTweet(postUrl).then((postData)=>{
        setPost(postData);
      });
    },[postUrl]);
 
const margin = 48;
const size = 1024;
const scale = 0.5;
const quote = "A beautiful travel saga of Dharma and his beloved Charlie ❤️\n#777CharlieInCinemas \n\nBook Your Tickets Now : https://t.co/fU0y37P0Ou \n\n@rakshitshetty @Kiranraj61 @PrithviOfficial @karthiksubbaraj @RanaDaggubati @PrithvirajProd @stonebenchers @SureshProdns @UFOMoviez @KRG_Studios";
const profilePic = "https://pbs.twimg.com/profile_images/1390508247564488711/nbL4gr9b_normal.jpg";


  return (
    <Container maxWidth="sm">

      <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Blue Tick Quote
      </Typography>
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
            {post && (<Stage 
              ref={stageRef}
              width={size*scale} 
              height={size*scale} 
              scale={{ x: scale, y: scale} }>
              <Layer>
              <Rect x={0} y={0} width={1024} height={1024-64} fill="green"/>
              <Text 
                  align={'middle'}
                  verticalAlign={'middle'}
                  text= {post.tweet.text}
                  width={1024-margin}
                  height={1024-margin}
                  x={margin}
                  y={margin} fontSize={48} />
                <Rect x={0} y={1024-64} width={1024} height={64} fill="red" />
              </Layer>
            </Stage>)}
          </Grid>
        </Grid>
        <button onClick={handleExport}>Save Image</button>
      
      </Box>
      <Copyright />
    </Container>
  );
}