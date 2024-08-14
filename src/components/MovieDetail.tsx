import React, { useEffect, useState } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { Box, Typography, Button, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import { AccessTimeFilled as AccessTimeFilledIcon, CalendarMonth as CalendarMonthIcon, Category as CategoryIcon } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import axios from 'axios';




const MovieDetail = () => {
    const [data,setData] = useState<any>(null)
    const [loading, setLoading] = useState(true); // Initially, loading is true
    const [error, setError] = useState(null); // To handle any error
    const {id} = useParams()

    const fetchData =  async () =>{
         
        const options = {method: 'GET', headers: {accept: 'application/json'}, };

    const response = await axios(`http://localhost:3000/tv/${id}`)
      .then(response=> {
        console.log(response.data,'fetched data')
        setData(response.data)});

    }
    
  useEffect(() => {
    console.log('mount')
    const loadData =  () => {
      try {
        const result =  fetchData();
        setData(result);
        setLoading(false); // Data is loaded, so set loading to false
      } catch (err) {
        setError(err);
        setLoading(false); // Even if there's an error, stop loading
      }
    };

    loadData(); // Fetch data when component mounts
    return () => {
        console.log('unmount')
      setData({})
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '500',
        width: '1200',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  // Example movie data
  
return (
    data && (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
        <YouTube videoId={ data?.trailer?.key } opts={opts} onReady={onPlayerReady} />
        <Card sx={{ width: '80%', maxWidth: '1200px', backgroundColor: '#1a1a1a', color: 'white' }}>
          <CardContent sx={{ padding: '1rem' }}>
            <Typography variant="h4" gutterBottom>
              {data.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <CalendarMonthIcon style={{ color: 'white' }} />
              <Typography>{data.year}</Typography>
              <CategoryIcon style={{ color: 'white' }} />
              <Typography>{data?.genres?.map((item)=> item.name).join(',')}</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {data.overview}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '1rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AccessTimeFilledIcon color="success" />
                <Typography>{data.runtime + " minutes"}</Typography>
              </Box>
              <Button variant="contained" color="error">
                + Add to List
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    )
  );

  
};
export default MovieDetail


