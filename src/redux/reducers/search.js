import { SEARCH_FAILURE, SEARCH_SUCCESS, SEARCH_REQUEST } from "../actions";

const initialState = {
    results: [],
    loading: false,
    error: null,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, loading: true, error: null };
        case SEARCH_SUCCESS:
            return { ...state, loading: false, error: null, results: action.payload };
        case SEARCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
export default searchReducer;
