import { Box, Button, Stack } from '@mui/material'
import React, { useState, useEffect,createRef } from 'react'
// components
import Header from './Header'
import Sidebar from './Sidebar'

// action
import { updateProfileUser } from '../redux/actions/UserActions'
import { logoutUser } from '../redux/actions/AuthActions'

  // redux
  import { connect } from "react-redux";

 function Layout({children,currentUser,changeimageprofile,logoutuser}) {
  const[image,setImage] = useState('')

  let RefImage = createRef()
 
4

   useEffect(()=> {
    //  console.log('se ejectuco') 
   },[])


   const handleSubmit = (e) => {
     e.preventDefault();

     // const reader = new FileReader()
     // reader.readAsDataURL(RefImage.current.files[0])
     // reader.onload = () => {
     //   setImage(reader.result)
     // }

     const formData = new FormData();
     formData.append("image", RefImage.current.files[0]);
     if (currentUser.cloudinary) {
       formData.append("image_public_id", currentUser.cloudinary.public_id);
       formData.append("image_signature", currentUser.cloudinary.signature);
     }

     changeimageprofile(localStorage.getItem("token"), formData);
   }

   const logout = () => {
     localStorage.removeItem("token");
     logoutuser()
   }
  return (
      <>
      <Header 
        {...currentUser}
        logout={logout}
      />
      <Stack mt={8} direction='row' spacing={2} justifyContent='space-between'>
         <Sidebar/>
         <Box flex={4}>
            {children}
        </Box>
        <Box flex={1}  sx={{ display:{xs:'none',sm:'block'} }}>
            {/* {JSON.stringify(currentUser)} */}
            {/* <img src={user.image} alt=""  width="300" height="300"/> */}
            <img src={currentUser.image} alt=""  width="300" height="300"/>
            {`${JSON.stringify(image)}`}
            <Box component='form' onSubmit={handleSubmit} enctype="multipart/form-data">
             
                Upload File
                <input
                ref={RefImage}
                  type="file"
                  accept="image/*"
                  name='image'
                 
                />
            
              <Button type="submit">
                Enviar
              </Button>
            </Box>

        </Box>
      </Stack>
      </>
    
  )
}

const mapStateToProps = (state)=>{
  // console.log(state)
  return{
    currentUser:state.auth.user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    changeimageprofile: (token,formData)=> dispatch( updateProfileUser( token,formData )),
    logoutuser:()=> dispatch( logoutUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)
