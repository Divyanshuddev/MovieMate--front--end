import React from 'react'
import NavBar from './NavBar'
import FriendsLayout from './FriendsLayout'
import { Divider } from '@mui/material'

export default function Friends() {
  return (
    <div>
      <NavBar />
      <Divider />
      <FriendsLayout />
    </div>
  )
}
