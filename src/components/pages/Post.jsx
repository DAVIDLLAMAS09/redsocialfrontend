import React, { useEffect } from 'react'
import Posts from '../Posts'

import { connect } from 'react-redux'
import { getPostsUsers } from '../../redux/actions/PostsActions'

 function Post({getpostsusers,posts,numPosts,profileImage,currentUserId}) {
    // console.log(posts)
    // console.log(profileImage)
    useEffect(() =>{
        getpostsusers(localStorage.getItem('token'))
    },[])
  return (
  <>
        {
            posts.length > 0 && (
                posts.map((post,idx) => post.privacy === 'Public' &&  <Posts key={idx} currentUserId={currentUserId} profileImage={profileImage} existsImagePost={post.image_url || null} {...post} />)
            )
        }
  </>
  )
}

const mapStateToProps = (state) =>{
    console.log(state)
    const { posts,numPosts } = state.post
    const { image,_id } = state.auth.user
    // console.log(posts)
    // console.log(numPosts)
    return {
        posts,
        numPosts,
        profileImage: image,
        currentUserId:_id
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        getpostsusers:(token)=> dispatch(getPostsUsers(token) )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)
