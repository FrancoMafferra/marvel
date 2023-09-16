const initialState = {
    comic: null,
    loading: false,
    error: null,
    };
    
    const comicReducer = (state = initialState, action) => {
    switch (action.type) {
    case "FETCH_COMIC_SUCCESS":
    return {
    ...state,
    comic: action.payload,
    loading: false,
    error: null,
    };
    case "FETCH_COMIC_FAILURE":
    return {
    ...state,
    comic: null,
    loading: false,
    error: action.payload,
    };
    default:
    return state;
    }
    };
    
    export default comicReducer;