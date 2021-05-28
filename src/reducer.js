

export const initialState = {
    CurrentAuthUser: null,
    tags : [], 
    name : "", 
    bio : "", 
    website : "", 
    user : null 
};



const reducer = (state,action) => {
    switch(action.type) {

        case "SET_AUTH_USER":
            return {
                ...state,
                CurrentAuthUser: action.data
            }

        case "SET_USER":
            return {
                ...state,

                name : action.Name,
                bio : action.bio,
                website : action.website,
                tags : action.tags


            }
            
        default: 
        return state;
            
        
    }
}

export default reducer;