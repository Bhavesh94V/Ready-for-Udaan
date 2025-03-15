import {
    SUBMIT_CONTACT_REQUEST,
    SUBMIT_CONTACT_SUCCESS,
    SUBMIT_CONTACT_FAILURE,
    CLEAR_MESSAGES
} from "../actions/contactActions";

const initialState = {
    loading: false,
    message: "",
    error: "",
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_CONTACT_REQUEST:
            return { ...state, loading: true, error: "" };

        case SUBMIT_CONTACT_SUCCESS:
            return { ...state, loading: false, message: action.payload };

        case SUBMIT_CONTACT_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CLEAR_MESSAGES:
            return { ...state, message: "", error: "" };

        default:
            return state;
    }
};

export default contactReducer;
