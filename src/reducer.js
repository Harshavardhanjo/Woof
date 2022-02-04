export const initialState = {
    pet : 'services and products',
    user : null,
    service : null,
    lattitude : null,
    longitude : null,
    location : '',
    selectedVendor : null,
    data : null,
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

        case "SET_VENDORS":
            return {
                ...state,
                vendorlocations : action.vendorlocations,
                vendorlattitudes : action.vendorlattitudes,
                vendorlongitudes : action.vendorlongitudes,
                vendorNames : action.vendorNames,
            }
        case "SET_SELECTED_VENDOR":
            return {
                ...state,
                selectedVendor : action.selectedVendor,
            }
    
        default:
            return state;
    }
}

export default reducer