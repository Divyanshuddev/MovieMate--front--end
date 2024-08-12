import { Box } from '@mui/material'
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import MoviesCard from './MoviesCard';
const style={
    root:{
        height:"150vh",
        backgroundColor:"black",
    },
    tabs: {
        "& .MuiTabs-indicator": {
          backgroundColor: "red",
          height: 3,
        },
        "& .MuiTab-root.Mui-selected": {
          color: 'red'
        }
      }
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export default function MoviesList() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={style.root}>
         <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',padding:"1rem" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={style.tabs} centered>
          <Tab label="Movies" {...a11yProps(0)} sx={{color:'white'}} />
          <Tab label="TV Shows" {...a11yProps(1)} sx={{color:'white'}} />
          <Tab label="Watch Later" {...a11yProps(2)} sx={{color:'white'}} />
          <Tab label="Watched" {...a11yProps(3)} sx={{color:'white'}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MoviesCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
    </Box>
  )
}
