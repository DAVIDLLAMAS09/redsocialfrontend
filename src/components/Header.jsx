  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import IconButton from "@mui/material/IconButton";
  import AppBar from "@mui/material/AppBar";
  import Toolbar from "@mui/material/Toolbar";
  import Typography from "@mui/material/Typography";
  import Button from "@mui/material/Button";
  import { Logout, Mail, Notifications, Search, Inbox } from "@mui/icons-material";
  import Drawer from "@mui/material/Drawer";
  import MenuItem from "@mui/material/MenuItem";
  import MenuIcon from '@mui/icons-material/Menu';
  import { Avatar, Badge, Box, Divider, InputBase, Menu, useMediaQuery, styled, List, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";







  // data navbar
  const headersData = [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
    {
      label: "Notifications",
      href: "/logout",
      type:"badge",
      icon:<Notifications/>
    },
    {
      label: "Messages",
      href: "/logout",
      type:"badge",
      icon:<Mail/>
    },
  ];

   // styles

   const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
  })


  const IconsBox = styled(Box)({
    display: 'flex'
    ,gap:'10px',
    alignItems:'center'
  })

  const SearchBox = styled(Box)({
    width: '40%',
    position:'relative',
    '& .MuiInputBase-root':{
      width:'100%',
    },
    '& .MuiInputBase-input':{
      padding:'5px 0px 5px 30px',
      backgroundColor:'#fff',
      borderRadius:'3px'
    }
  })

  const IconSearch = styled(Box)({
    position:'absolute',
    color: '#b4adad',
    zIndex: 1,
    height: '100%',
    display:'flex',
    alignItems:'center'
  })
  
  
 function Header({logout,username,image,...rest}) {
  // console.log('rest', rest)
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
    const [open,setOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width:900px)');


  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {

      isMobile ? setState({...state,mobileView:true}) : setState({...state, mobileView:false});
    }, [isMobile]);
  
    const displayDesktop = () => {
      return (
        <>
        {/* title  */}
        <StyledToolbar >
         <Typography variant='h6' >
           Social Media
         </Typography>
         {/* search */}
         <SearchBox>
           <IconSearch >
              <Search></Search>
           </IconSearch>
            <InputBase  placeholder="search..."/>
         </SearchBox>
         {/* icons */}
         <IconsBox>
           <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                  <Mail />
              </Badge>
           </IconButton>
          <IconButton color="inherit">
              <Badge badgeContent={100} max={99} color="error">
                  <Notifications />
              </Badge>
          </IconButton>
           <IconButton onClick={(e) => setOpen(true)}>
              <Avatar 
                  sx={{ width: 30, height: 30 }}
                  src={image}
                
                />
              <Typography variant='span' ml={1} sx={{fontSize:14,color:'#fff',textTransform: 'capitalize'}}>
                   {username}
              </Typography>
           </IconButton>
           
         </IconsBox>
        </StyledToolbar>
        {/* menu for profile user */}
        <Menu
            
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={()=>setOpen(false)}
            sx={{ top:20,left:-50 }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
           <MenuItem> 
               Profile
           </MenuItem>
           <MenuItem>
              My account
           </MenuItem>
           <Divider></Divider>
           <MenuItem onClick={(e)=> logout()} >
              <Logout fontSize="small"/> Logout
           </MenuItem>
       </Menu>
       </>
      );
    };
  
    const displayMobile = () => {

      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <StyledToolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 360, minWidth: 250 }}>
              <List component="nav">{getDrawerOptions()}</List>
            </Box>
          </Drawer>
          {/* text */}
          <Typography variant="h6">Social Media</Typography>
          {/* search */}
          <SearchBox>
            <IconSearch>
              <Search></Search>
            </IconSearch>
            <InputBase placeholder="search..." />
          </SearchBox>
        </StyledToolbar>
      );
    };
  
    // show option list on drawer mobile
    const getDrawerOptions = () => {
      return headersData.map(({ label, href,type,icon },index) => {
        return (
          <>
          {
          type != 'badge' ? (
            <ListItemButton
              component={RouterLink}
              to={href}
                // selected={selectedIndex === 0}
                // onClick={(event) => handleListItemClick(event, 0)}
                key={index}
              >
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText>
                    {label}
              </ListItemText>
            </ListItemButton>
          ) :
          (
            <ListItemButton
            sx={{display:'block',mt:2}}
            component={RouterLink}
            to={href}
              // selected={selectedIndex === 0}
              // onClick={(event) => handleListItemClick(event, 0)}
              key={index}
            >
              <Badge badgeContent={100} max={99} color="error" sx={{display:'flex',justifyContent:'space-between'}}>
                 {label} {icon}
              </Badge>
          </ListItemButton>
          )
          }
         
            {index ===3 && <Divider /> }
          </>
        );
      });
    };
  
    return (
     
        <AppBar position="fixed">
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
     
    );
  }




  export default Header