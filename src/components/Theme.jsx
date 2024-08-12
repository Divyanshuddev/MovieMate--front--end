import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const style={
    iconButton:{
        "&:hover":{
            backgroundColor:"red"
        }
    }
}
export default function Theme() {
    const [theme,setTheme]=useState('light')
  return (
    <div>
        {
      theme==="light"?(
        <IconButton onClick={()=>setTheme('dark')} sx={style.iconButton}>
            <WbSunnyIcon style={{color:"white"}} fontSize='large'/>
        </IconButton>
      ):(
        <IconButton onClick={()=>setTheme('light')} sx={style.iconButton}>
            <DarkModeIcon style={{color:"white"}} fontSize='large'/>
        </IconButton>
      )
        }
    </div>
  )
}
