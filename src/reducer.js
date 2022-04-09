export const initialState = {
    pet : localStorage.getItem('pet'),
    user : null,
    service : localStorage.getItem('service'),
    mini: null,
    lattitude : localStorage.getItem('lattitude'),
    longitude : localStorage.getItem('longitude'),
    location : localStorage.getItem('location'),
    city : localStorage.getItem('city'),
    selectedVendor : null,
    data : null,
    all_services : JSON.parse(localStorage.getItem('all_services')),
    all_pets : JSON.parse(localStorage.getItem('all_pets')),
    sort : 'Distance',
    all_sort : ['Distance','Rating','Price'],
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
                city : action.city,
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
        case "SET_SERVICES":
            return {
                ...state,
                all_services : action.all_services,
            }
        case "SET_PETS":
            return {
                ...state,
                all_pets : action.all_pets,
            }

        case "SET_SORT":
            return {
                ...state,
                sort : action.sort,
            }
        
        case "SET_MINI":
            return {
                ...state,
                mini : action.mini,
            }
    
        default:
            return state;
    }
}

export default reducer