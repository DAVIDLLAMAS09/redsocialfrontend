import { Box, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
// components
import Layout from '../Layout'
import Post from './Post'

  // redux
  import { connect } from "react-redux";

 function Home() {
  const [user,setUser] = useState()
   useEffect(()=> {

   },[])
  return (

    <Layout>
            <Post />
    </Layout>
    
  )
}

const mapStateToProps = (state)=>{
  // console.log(state)
  return{
    currentUser:'hola'
  }
}

export default connect(mapStateToProps,null)(Home)
