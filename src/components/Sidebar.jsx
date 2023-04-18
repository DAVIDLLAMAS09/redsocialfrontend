import React from 'react'
import {  Link } from 'react-router-dom'
import { Home, Person,Settings,AccountBox,Group } from '@mui/icons-material';
import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,styled } from '@mui/material'


 function Sidebar() {

  const IconsWrapper = styled(ListItemButton)({
    transition: 'all 0.3s ease',
    '&:hover':{
        background:'#fff',
        color:'#000',
        borderRight: '4px solid #1976D2',
        '& .MuiListItemIcon-root':{
            color:'#0A1929'
        }
    },
    '& .MuiListItemIcon-root':{
        color:'#fff'
    }
  })

  return (
   <Box flex={1} sx={{ display:{xs:'none',sm:'none',md:'block'},maxWidth:'250px',minWidth:'250px' }}>
       <Box position='fixed' sx={{maxWidth:'250px',minWidth:'250px',background:'#0A1929',color:'#FFFFFF',height:'100vh'}}>
            <List>
                <ListItem disablePadding>
                    <IconsWrapper component={Link}  to={'/'}>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary='Home'/>
                    </IconsWrapper>
                </ListItem>
                <ListItem disablePadding>
                    <IconsWrapper component={Link}  to={'/home'}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary='Friends'/>
                    </IconsWrapper>
                </ListItem>
                <ListItem disablePadding>
                    <IconsWrapper component={Link}  to={'/home'}>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary='Groups'/>
                    </IconsWrapper>
                </ListItem>
                <ListItem disablePadding>
                    <IconsWrapper component={Link}  to={'/home'}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary='Settings'/>
                    </IconsWrapper>
                </ListItem>
                <ListItem disablePadding>
                    <IconsWrapper component={Link}  to={'/home'}>
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary='Profile'/>
                    </IconsWrapper>
                </ListItem>
            </List>
            <Box>
                <Divider></Divider>
                <Typography variant='h6' fontWeight={400} mb={2} px={1}>
                    Friends
                </Typography>
                <AvatarGroup max={6} sx={{justifyContent: 'flex-end'}}>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                    <Avatar alt='alt en avatar' src={`https://mui.com/static/images/avatar/2.jpg`}/>
                </AvatarGroup>
            </Box>
       </Box>
   </Box>
  )
}

export default Sidebar;