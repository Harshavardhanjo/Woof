export const initialState = {
    pet : 'pet',
};


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PET":
            return {
                ...state,
                pet : action.pet,
            }
    
        default:
            return state;
    }
}

export default reducer