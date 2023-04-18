
// inicializamos los estados iniciales de otdos los reducers que vayan apareciendo
export const initialState = {
    auth: {
        user:null,
        loading:false,
        error:null,
        active:false
    },
    post:{
        posts:[],
        selectedPost:{},
        loading:false,
        error:null,
        numPosts:0,
    }
}