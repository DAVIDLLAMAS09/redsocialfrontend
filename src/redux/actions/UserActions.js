
const profileuser = (user)=>{
  return{
    type:'PROFILE_USER',
    payload:user
  }
}


const profileuserimage = (imagen)=>{
  return { 
    type:'PROFILE_USER_IMAGE',
    payload:imagen
  }
}


export const verify_token_user = (active)=>{
  // console.log(typeof active)
  return {
    type:'VERIFY_USER',
    payload:active
  }
}


// obtenemos datos del perfil
export const getProfile = (token)=>{
    const url = 'http://localhost:3001/api/profile/';
    return dispatch =>{
      fetch(url,{
        method: 'GET',
        headers:{
            'auth-token':token,
            'Content-Type': 'application/json'
          }
    })
    .then(response => response.json() ) 
    .then(data=> dispatch( profileuser(data.user) ))
  }

}


// modificar foto de perfil

export const updateProfileUser = (token,formData)=>{
  const url = 'http://localhost:3001/api/profile/uploadimage/'
  // console.log(formData.get('image'))
  return dispatch =>{
    fetch(url,{
      method: 'POST',
      body:formData,
      headers:{
          'auth-token':token
          // 'Content-Type': 'multipart/form-data'
        }
  })
  .then(response => response.json() ) 
  .then(data=>{
    dispatch( profileuserimage(data.updateuser.image) )
    // getProfile(token)

  } )
  .catch(error=>console.log(error))
  }

 
}

// verifica token de usuario si esta activo o no

export const verifyTokenUser = (token)=>{
  const url = 'http://localhost:3001/api/verify_token_user'
  return new Promise(async(resolve, reject) =>{
    try {
     const data = await fetch(url,{
        method: 'POST',
        body:JSON.stringify({}),
        headers:{
            'auth-token':token
            // 'Content-Type': 'multipart/form-data'
          }
    })

    resolve(data)
   
    } catch (error) {
      reject(error)
    }

  })
     
 
}