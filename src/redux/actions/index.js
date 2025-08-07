export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const addFavourite = (company) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: company,
    };
};

export const removeFavourite = (companyId) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: companyId,
    };
};

export const searchRequest = () => ({
    type: SEARCH_REQUEST,
});

const searchSuccess = (results) => ({
    type: SEARCH_SUCCESS,
    payload: results,
});

const searchFailure = (error) => ({
    type: SEARCH_FAILURE,
    payload: error,
});

export const fetchJobs = (query) => {
    return async (dispatch) => {
        dispatch(searchRequest());

        try {
            const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error(response.statusText);
            const { data } = await response.json();
            dispatch(searchSuccess(data));
        } catch (error) {
            dispatch(searchFailure(error.message));
        }
    };
};
