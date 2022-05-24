export const initialState = {
    pet : localStorage.getItem('pet'),
    user : null,
    service : localStorage.getItem('service'),
    mini: null,
    selectedVendor : null,
    data : null,
    all_services : JSON.parse(localStorage.getItem('all_services')),
    all_pets : JSON.parse(localStorage.getItem('all_pets')),
    sort : 'Distance',
    all_sort : ['Distance','Rating','Price'],
    pet_images : null,
    service_images : null,
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

        case "SET_PET_IMAGES":
            return {
                ...state,
                pet_images : action.pet_images,
            }

        case "SET_SERVICE_IMAGES":
            return {
                ...state,
                service_images : action.service_images,
            }
    
        default:
            return state;
    }
}

export default reducer