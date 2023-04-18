import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Navigate } from 'react-router-dom';

import { verifyTokenUser,verify_token_user } from '../redux/actions/UserActions'

function PrivateRoutes({children, user,verifyTokenUser,existstoken,verify_token_user}) {

    const verificarUser = async()=>{
        let promise = await verifyTokenUser(localStorage.getItem('token'))
        
        promise.status === 200 ?( verify_token_user(true)  ) : (verify_token_user(false))
        // console.log(promise)
    }

    useEffect(() => {
        verificarUser()  
    },[])
    // console.log(props)
    return (
       user && existstoken ?  children : <Navigate to='/signin'></Navigate>
     );
}

const mapStateToProps = (state)=> {
    // console.log(state)

    return{
        user: state.auth.user,
        existstoken:state.auth.active
    }
}


const mapDispatchToProps = (dispatch)=> {
    return{
        verifyTokenUser:(token)=>( verifyTokenUser(token) ),
        verify_token_user:(active)=> dispatch( verify_token_user(active) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);