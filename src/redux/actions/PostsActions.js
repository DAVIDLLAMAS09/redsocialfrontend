// creadores de acciones

const getPostsAction = (data)=>{
    return { 
        type: 'GET_POSTS',
        payload:data
    }
}




// obtenemos todos los post
export const getPostsUsers = (token) => {

    const url = 'http://localhost:3001/api/post'
    return dispatch =>{
        fetch(url,{
            method: 'GET',
            headers:{
                'auth-token':token,
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json() ) 
        .then(data=>dispatch( getPostsAction(data) ))
    }
}


// like dislike post

export const likedislikePost =(idPost,token)=>{
    const url = `http://localhost:3001/api/${idPost}/like_dislike`
    return dispatch =>{
console.log('dispatch like dislike');
        // fetch(url,{
        //     method: 'POST',
        //     headers:{
        //         'auth-token':token,
        //         'Content-Type': 'application/json'
        //       }
        // })
        // .then(response => response.json() ) 
        // .then(data=>dispatch( getPostsAction(data) ))
    }
}