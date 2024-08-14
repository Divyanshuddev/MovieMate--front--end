import { Card, Box, Typography, Button } from '@mui/material'
import React from 'react'

const CustomCard = ({imgUrl,title,year,genre, onClick}) => {
  return (
    <Card  sx={{
        display: 'inline-block',
        width: '100%',
        height: '100%',
        marginRight: '1rem',
        backgroundColor: '#1a1a1a',
        color: 'white',
      }} onClick={onClick}>
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <img
            src={imgUrl}
            alt={title}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ padding: '0.5rem' }}>
          <Typography variant="h6" noWrap={true}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* <CalendarMonthIcon style={{ color: 'white' }} /> */}
            <Typography variant="caption">{year}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' ,overflowX:'hidden'}}>
            {/* <CategoryIcon style={{ color: 'white' }} /> */}
            <Typography variant="caption">{genre}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Button variant="contained" color="error">+ Add to List</Button>
          </Box>
        </Box>
      </Card>
  )
}

export default CustomCard