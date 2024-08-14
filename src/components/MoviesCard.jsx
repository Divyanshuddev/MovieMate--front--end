import { Box, Button, Card, Grid, Typography } from "@mui/material";

import axios from "axios";
import React, { useEffect, useState} from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from "@mui/icons-material/Category";
import Chip from "@mui/material/Chip";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Rating from '@mui/material/Rating';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import StarsIcon from '@mui/icons-material/Stars';
import { Search } from "@mui/icons-material";
import CustomCard from "./molecules/CustomCard.tsx";
import { useNavigate } from "react-router-dom";

const style = {
  card: {
    height: "500px",
    backgroundColor: "#1a1a1a",
    border: "1px solid white",
  },
};
export default function MoviesCard({type}) {
  const [data,setData]=useState([])
  const query= type =='Movies'? 'movies' : 'tv';
  const navigate = useNavigate()

  useEffect(()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}, };

    const response = axios(`http://localhost:3000/${query}`)
      .then(response=> setData(response.data));

    return (()=>{
      setData([])
    })
  },[])

  const handleClick = (id) => {
    console.log(id, 'event');
    navigate(`/movie/${id}`)
  }

  const getYear= (value) =>{
    if(type=='Movies') return value.release_date.split('-')[0]
    else return value.first_air_date.split('-')[0]
  }
  console.log(data)
  return (
    <Box sx={{
      display: 'flex',
      overflowY: 'scroll',
      whiteSpace: 'nowrap',
      padding: '1rem',
      justifyContent:"center",
      scrollBehavior: 'smooth',
    }}>
      <Grid container  sx={{justifyContent:'center'}}>
      {data.map((item, index) => (
        <Grid items padding={'3px'} xs={3} key={item.id} >
        <CustomCard imgUrl={item.imgUrl} title={item.title ? item.title: item.name } year={getYear(item)} genre={item.genre_name.join(',')} onClick={()=>{ handleClick(item.id)}}></CustomCard>
        </Grid>
      ))}</Grid>
    </Box>
  )
}
