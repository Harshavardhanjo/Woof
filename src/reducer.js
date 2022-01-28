export const initialState = {
    pet : 'pet',
    user : null,
};


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PET":
            return {
                ...state,
                pet : action.pet,
            }
        case "SET_USER":
            return {
                ...state,
                user : action.user,
            }
    
        default:
            return state;
    }
}

export default reducer