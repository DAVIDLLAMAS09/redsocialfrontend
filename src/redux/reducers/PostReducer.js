import { initialState } from "./initialState";



export const PostReducer = (state= initialState.post,action) =>{
    switch (action.type) {
        case 'GET_POSTS':
            // console.log(action)
            return {
                ...state,
                numPosts:action.payload.numPosts,
                posts:action.payload.posts
            }
            
    
        default:
            return state
    }
}
