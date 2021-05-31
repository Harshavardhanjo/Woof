

export const initialState = {
    CurrentAuthUser: null,
    tags : [], 
    name : "", 
    bio : "", 
    website : "", 
    user : null ,
    selectedUtil : null
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
                bio : action.Bio,
                website : action.Website,
                tags : action.Tags


            }
            
        case "SET_UTIL":
            return{

                ...state,

                selectedUtil : action.data,
            }
        default: 
        return state;
            
        
    }
}

export default reducer;