import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from "@mui/icons-material/Category";
import Chip from "@mui/material/Chip";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Rating from '@mui/material/Rating';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import StarsIcon from '@mui/icons-material/Stars';
const style = {
  card: {
    height: "500px",
    backgroundColor: "#1a1a1a",
    border: "1px solid white",
  },
};
export default function MoviesCard() {
  const [movie,setMovie]=useState([])
  const getMovies=()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.themoviedb.org/3/account/null', options)
  .then(response => response.json())
  .then(response => setMovie(response))
  .catch(err => console.error(err));
  }

  useEffect(()=>{
    getMovies()
  },[])

  console.log(movie)

  return (
    <Grid container spacing={5}>
      <Grid item xs={2}>
        <Card sx={style.card}>
          <Box sx={{ width: "100px" }}>
            <img
              src="https://th.bing.com/th/id/R.27a1f62f0895aa52617727b7a8381199?rik=knUnfvfEZSKIew&riu=http%3a%2f%2fcomic-cons.xyz%2fwp-content%2fuploads%2fmarvel-cinematic-universe-the-avengers-infinity-war-movie-poster.jpg&ehk=XXfDtc61WptIXpd%2bbgcdlOvMfqIo3r9KRiOeZGhAz1s%3d&risl=&pid=ImgRaw&r=0"
              alt="jd"
              style={{ width: "200%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" color={"white"} fontWeight={"bold"}>
              The Avengers
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CalendarMonthIcon style={{ color: "white" }} />
              <Typography color={"white"}>2020</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CategoryIcon style={{ color: "white" }} />
              <Typography color={"white"}>Action, Sci-fiction</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={2}>
              <Button variant="contained" color="error">
                + Add to List
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card sx={style.card}>
          <Box sx={{ width: "100px" }}>
            <img
              src="https://th.bing.com/th/id/R.02fcdb8d3e101a546dd7fdab7267ecc6?rik=jPjjA9flpi%2fa5Q&riu=http%3a%2f%2fmedia.comicbook.com%2f2017%2f10%2fant-man-movie-poster-marvel-cinematic-universe-1038903.jpg&ehk=4bWuFMELTPvAYKeFukFMdCwoEwF1a8R%2bgm5e36aaZ7Y%3d&risl=&pid=ImgRaw&r=0"
              alt="jd"
              style={{ width: "200%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" color={"white"} fontWeight={"bold"}>
              Ant Man
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CalendarMonthIcon style={{ color: "white" }} />
              <Typography color={"white"}>2020</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CategoryIcon style={{ color: "white" }} />
              <Typography color={"white"}>Action, Sci-fiction</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={2}>
              <Button variant="contained" color="error">
                + Add to List
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card sx={style.card}>
          <Box sx={{ width: "100px" }}>
            <img
              src="https://4.bp.blogspot.com/-74SLf8I1074/Wehs8-HpSFI/AAAAAAAAAZ8/CBuRj3M0KvIliSQAWKsA_x1VDGrZkB1oQCLcBGAs/s1600/thor-ragnarok-poster-main.jpg"
              alt="jd"
              style={{ width: "200%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" color={"white"} fontWeight={"bold"}>
              Thor Ragnarok
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CalendarMonthIcon style={{ color: "white" }} />
              <Typography color={"white"}>2020</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CategoryIcon style={{ color: "white" }} />
              <Typography color={"white"}>Action, Sci-fiction</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={2}>
              <Button variant="contained" color="error">
                + Add to List
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card sx={style.card}>
          <Box sx={{ width: "100px" }}>
            <img
              src="https://th.bing.com/th/id/R.eaaa55270be31fd4ad5f1f9b06d202c2?rik=gc4BfcDFgEStHQ&riu=http%3a%2f%2fcomic-cons.xyz%2fwp-content%2fuploads%2fmarvel-cinematic-universe-captain-marvel-movie-poster.jpg&ehk=V3dPUWkCAvk%2ffhR5jSYxIxUIFubB89oeYXCMKMjNm%2fs%3d&risl=&pid=ImgRaw&r=0"
              alt="jd"
              style={{ width: "200%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" color={"white"} fontWeight={"bold"}>
              Captain Marvel
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CalendarMonthIcon style={{ color: "white" }} />
              <Typography color={"white"}>2020</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CategoryIcon style={{ color: "white" }} />
              <Typography color={"white"}>Action, Sci-fiction</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={2}>
              <Button variant="contained" color="error">
                + Add to List
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card sx={style.card}>
          <Box sx={{ width: "100px" }}>
            <img
              src="https://image.tmdb.org/t/p/original/y1HTO8sZNiTSsq1EFdSfsqQPshW.jpg"
              alt="jd"
              style={{ width: "200%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" color={"white"} fontWeight={"bold"}>
              Black Panther
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CalendarMonthIcon style={{ color: "white" }} />
              <Typography color={"white"}>2020</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CategoryIcon style={{ color: "white" }} />
              <Typography color={"white"}>Action, Sci-fiction</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={2}>
              <Button variant="contained" color="error">
                + Add to List
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card sx={style.card}>
          <Box sx={{ width: "100px" }}>
            <img
              src="https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg"
              alt="jd"
              style={{ width: "200%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="h5" color={"white"} fontWeight={"bold"}>
              Spider Man
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CalendarMonthIcon style={{ color: "white" }} />
              <Typography color={"white"}>2020</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <CategoryIcon style={{ color: "white" }} />
              <Typography color={"white"}>Action, Sci-fiction</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={2}>
              <Button variant="contained" color="error">
                + Add to List
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Card
        sx={{
          width: "50%",
          height: "250px",
          border: "1px solid white",
          marginTop: "20px",
          marginLeft: "2.5rem",
          backgroundColor: "#1a1a1a",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Box width={"100%"}>
          <img
            src="https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg"
            alt="jd"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              alignItems: "center",
              width:"100%"
            }}
          >
            <Typography variant="h4" color={"white"} fontWeight={"bold"}>
              Spider Man
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Chip label="Action" color="error" />
              <Chip label="Sci-fiction" color="error" />
              <Chip label="Adventure" color="error" />
            </Box>
          </Box>
          <Typography variant="p" textAlign={'justify'} color={'white'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </Typography>
          <Box sx={{display:"flex",flexDirection:"row",gap:"3rem",alignItems:"center"}}>
            <Box sx={{display:"flex",flexDirection:"row",gap:"0.5rem",alignItems:"center"}}>
                <AccessTimeFilledIcon color="success" fontSize="large" />
                <Typography color={"white"}>1h 33mm</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",gap:"0.5rem",alignItems:"center"}}>
                <CalendarMonthIcon color="info" fontSize="large" />
                <Typography color={'white'}>2005</Typography>
            </Box>
            <Button variant="contained" color="error">+ Add to List</Button>
            {/* <Box sx={{display:"flex",flexDirection:"row",gap:"0.5rem",alignItems:"center"}}>
                <StarsIcon fontSize="large" color="warning" />
            <Rating name="read-only" value={5} readOnly />
            </Box> */}
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
