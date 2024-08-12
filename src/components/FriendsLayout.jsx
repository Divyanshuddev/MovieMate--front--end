import {
  Avatar,
  Card,
  TextField,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import FriendsList from "./Friend.json";
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const style = {
  root: {
    height: "90vh",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
  searchBox: {
    borderRadius: "50px",
    backgroundColor: "#1a1a1a",
    width: "100%",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
    },
    input: {
      "&::placeholder": {
        fontStyle: "italic",
        color: "white",
      },
    },
  },
  userCard: {
    height: "300px",
    borderRadius: "10px",
    backgroundColor: "#1a1a1a",
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#D21312",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
  },
  friendsBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    height: "75vh",
    overflow: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  chatData: {
    backgroundColor: "#1a1a1a",
    height: "85vh",
    borderRadius: "20px",
    display:"flex",
    flexDirection:"column"
  },
  profileData: {
    height: "50px",
    padding: "0.7rem",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  typeBox:{
    position:"absolute",
    bottom:25,
    backgroundColor:"#FA7070",
    color:"white",
    width:"55%",
    borderRadius:"2rem",
    input: {
        "&::placeholder": {
          fontStyle: "italic",
          color: "white",
        },
      },
      "& label.Mui-focused": {
        color: "#1a1a1a"
      },
      // focused color for input with variant='standard'
      "& .MuiInput-underline:after": {
        borderBottomColor: "#1a1a1a"
      },
      // focused color for input with variant='filled'
      "& .MuiFilledInput-underline:after": {
        borderBottomColor: "#1a1a1a"
      },
      // focused color for input with variant='outlined'
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#1a1a1a"
        }
      }
  },
  
};

export default function FriendsLayout() {
  return (
    <Box sx={style.root}>
      <Box
        width={"40%"}
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          sx={style.searchBox}
          type="text"
          placeholder="Search"
          InputProps={{
            classes: { input: style.input },
          }}
        />
        <Box sx={style.friendsBox}>
          {FriendsList.map((item) => (
            <Card sx={style.userCard} key={item.id}>
              <Box sx={style.cardContent}>
                <Avatar src={item.image} />
                <Box>
                  <Typography variant="h6" color={"white"}>
                    {item.name}
                  </Typography>
                  <Typography color={"gray"}>hello !</Typography>
                </Box>
              </Box>
              <Typography color={"white"}>1h ago</Typography>
            </Card>
          ))}
        </Box>
      </Box>
      <Box width={"60%"} padding={"1rem"}>
        <Box sx={style.chatData}>
          <Box sx={style.profileData}>
            <Box sx={{display:"flex",flexDirection:"row",gap:"1rem",alignItems:"center"}}>
              <Avatar src="https://netboardme-cf1.s3.amazonaws.com/published/26472/files/0c79db9d5eb217770ed7692fd235c37e.jpg" />
              <Box>
                <Typography variant="h6" color={"white"}>
                  Sally
                </Typography>
                <Typography color={"gray"}>hello !</Typography>
              </Box>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon style={{color:"#D21312"}} />
                </IconButton>
                <IconButton>
                    <VideoCallIcon style={{color:"#D21312"}} />
                </IconButton>
                <IconButton>
                    <MoreVertIcon style={{color:"#D21312"}} />
                </IconButton>
            </Box>
          </Box>
          <Divider  style={{ background: 'red' }} />
          <Box sx={{display:"flex",justifyContent:"center"}}>

        <TextField
          sx={style.typeBox}
          type="text"
          placeholder="Message"
          InputProps={{
            classes: { input: style.input },
          }}
        />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
