import { Box } from '@mui/material'
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import MoviesCard from './MoviesCard';
import {tabs} from './constant.js'

const style={
    root:{
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
      msOverflowStyle: 'none',  // Hide scrollbar IE and Edge
      scrollbarWidth: 'none',  // Hide scrollbar Firefox
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
         <Box sx={{ width: '100%' , height:'auto'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',padding:"1rem" , scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
          msOverflowStyle: 'none',  // Hide scrollbar IE and Edge
          scrollbarWidth: 'none',  // Hide scrollbar Firefox
          }}>
        <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example" sx={style.tabs} centered>
         { 
            tabs.map((value, index) => {
              return <Tab label={value} {...a11yProps(index)} sx={{color:'white'}} />

          })}

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MoviesCard type={tabs[value]} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MoviesCard type={tabs[value]} />
      </CustomTabPanel>
      
    </Box>
    </Box>
  )
}
