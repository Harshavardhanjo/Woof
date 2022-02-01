export const initialState = {
    pet : 'services and products',
    user : null,
    service : null,
    lattitude : null,
    longitude : null,
    location : '',
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

        case "SET_SERVICE":
            return {
                ...state,
                service : action.service,
            }

        case "SET_LOCATION":
            return {
                ...state,
                lattitude : action.lattitude,
                longitude : action.longitude,
                location : action.location,
            }
    
        default:
            return state;
    }
}

export default reducer