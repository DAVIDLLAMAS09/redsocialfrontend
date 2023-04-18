import { initialState } from "./initialState";

export const AuthReducer = (state = initialState.auth, action) =>{
    switch(action.type){

        case 'LOGIN_USER_START':
            return { 
                ...state,
                loading: true,
                error:null,
                active:false
            }
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false,
                error:null,
                active:true
            }
        case 'LOGIN_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
                active:false
            } 
        case 'SIGNUP_USER_START':
            return { 
                ...state,
                loading: true
            }
        case 'SIGNUP_USER_SUCCESS':
            return { 
                ...state,
                loading:false,
                error:null,
                user:null
            }
        
        case 'SIGNUP_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case 'LOGOUT_USER_SUCCESS':
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
                active: false
            }
        case 'PROFILE_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
                error:null
            }
        case 'PROFILE_USER_IMAGE':
            return {
                ...state,
                user:{
                    ...state.user,
                    image: action.payload
                },
                loading: false,
                error:null
            }
        case 'VERIFY_USER':
            // console.log(action)
            return {
                ...state,
                active:action.payload,
                user: action.payload ==false ? null : {...state.user}
            }
        
        
        default:
            return state
    }
}