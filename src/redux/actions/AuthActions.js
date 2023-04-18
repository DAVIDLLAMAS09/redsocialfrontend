
// creadores de acciones 

// signin
export const loginStart = () =>{
    return { 
        type:'LOGIN_USER_START'
    }
}

export const loginSuccess = (user) =>{
    return { 
        type:'LOGIN_USER_SUCCESS', 
        payload: user
    }
}

export const loginFailure = (error) =>{
    return { 
        type:'LOGIN_USER_FAILURE',
        payload:error
    }
}

// signup

export const signupStart = () =>{
    return{
        type:'SIGNUP_USER_START'
    }
}

export const signupSuccess = () =>{
    return{
        type:'SIGNUP_USER_SUCCESS'
    }
} 

export const signupFailure = (error) =>{
    return{
        type:'SIGNUP_USER_FAILURE',
        payload:error
    }
}

// logout user

const logoutAction = () =>{
    return{
        type:'LOGOUT_USER_SUCCESS'
    }
}


// acciones

// login action
// export const loginUser = (email, password) =>{
//     const url = 'http://localhost:3001/api/signin'
//     const data = {
//         email,
//         password
//     }
//     console.log(data)
//     return dispatch => {
//         dispatch( loginStart() )
//         fetch(url,{
//             method: 'POST',
//             body:JSON.stringify(data),
//             headers:{
//                 'Content-Type': 'application/json'
//               }
//         })
//         .then(response => response.json())
//         .then(user => {
//             console.log(user.message)
//             if(user.success){
//                 dispatch( loginSuccess( user ) )
//                 localStorage.setItem('token', user.token);
                
//             }else{
//                 dispatch( loginFailure( user.message ) )
//             }
//         })
//         .catch(error => dispatch( loginFailure(error) )  );
//     }
// }

export const loginUser = (email, password) =>{
        const url = 'http://localhost:3001/api/signin'
        const data = {
            email,
            password
        }

        return new Promise((resolve, reject) => {
            try {

                fetch(url,{
                    method: 'POST',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json'
                      }
                }).then(response => resolve( response.json() ) )
                
                
            } catch (error) {
                reject(error)
            }
           


          });
}

export const signUpUser = (username,email, password) =>{
    const url = 'http://localhost:3001/api/signup'
    const data = {
        username,
        email,
        password
    }
    return new Promise((resolve, reject) =>{
        try {
            fetch(url,{
                method: 'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                  }
            }).then(response => resolve( response.json() ) )
            
        } catch (error) {
            reject(error)
        }
    })
}


export const logoutUser = () =>{
    return dispatch =>{
        dispatch( logoutAction() )
    }
}
   