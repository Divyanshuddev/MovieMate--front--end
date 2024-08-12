import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Theme from './Theme'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
const style={
    root:{
        backgroundColor:"black",
        padding:"1rem",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    navButtonContainer:{
        display:"flex",
        flexDirection:"row",
        gap:"1rem",
        alignItems:"center"
    },
    navButton:{
        color:"white",
        fontWeight:"bold",
        "&:hover":{
            backgroundColor:"red"
        }
    },
    iconButton:{
        "&:hover":{
            backgroundColor:"red"
        }
    }
}
export default function NavBar() {
    const navigate=useNavigate()
  return (
    <div>
      <Box sx={style.root}>
        <Stack direction={'row'}>
        <Typography variant='h5' color={'white'} fontWeight={'bold'}>Movie</Typography>
        <Box>
            <Typography variant='h5' color={'red'} fontWeight={'bold'}>
        {String.fromCodePoint('0x1F37F')}
            </Typography>
        </Box>
        <Typography variant='h5' color={'red'} fontWeight={'bold'}>Mate </Typography>
        </Stack>
        <Box sx={style.navButtonContainer}>
            <Button variant='text' sx={style.navButton} size='large' onClick={()=>navigate('/')}>Home</Button>
            <Button variant='text' sx={style.navButton} size='large'>Recommendation</Button>
            <Button variant='text' sx={style.navButton} size='large'>Suggestion</Button>
            <Button variant='text' sx={style.navButton} size='large' onClick={()=>navigate('/friends')}>Friends</Button>
            <Theme />
            <IconButton sx={style.iconButton}>
            <AccountCircleIcon style={{color:"white"}} fontSize='large' />
            </IconButton>
        </Box>
      </Box>
    </div>
  )
}
