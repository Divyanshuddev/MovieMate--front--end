import React from 'react'
import NavBar from './NavBar'
import { Divider } from '@mui/material'
import MoviesList from './MoviesList'

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Divider />
      <MoviesList />
    </div>
  )
}
