import React from 'react'
import NavBar from './NavBar'
import { Divider, GlobalStyles } from '@mui/material'
import MoviesList from './MoviesList'

export default function Layout() {
  return (
    <>
    <GlobalStyles styles={{  
      '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
    msOverflowStyle: 'none',  // Hide scrollbar IE and Edge
    scrollbarWidth: 'none',  // Hide scrollbar Firefox
  }}/>
     
    <div style={{backgroundColor: 'black', minHeight:'100vh'}}>
      <NavBar />
      <Divider />
      <MoviesList />
    </div>
    </>
    
  )
}
