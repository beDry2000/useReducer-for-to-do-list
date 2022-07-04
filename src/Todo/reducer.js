import { SET_JOB, ADD_JOB, DEL_JOB } from "./constants";

export const initState = {
  job: '',
  jobs: []
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DEL_JOB:
            newState = {
                ...state,
                jobs: state.jobs.filter((_, index) => index != action.payload)
            }
            break;
        default:
            throw new Error('Invalid action!!!');

    }
    return newState;
}

export default reducer;