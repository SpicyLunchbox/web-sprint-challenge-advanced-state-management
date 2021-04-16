import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF, ADD_ERROR } from '../actions'; //brings actions from actions/index.js

const initialState = { 
    isLoading: false,
    smurfs: [],
    error: ""
}

const reducer = (state = initialState, action)=>{ //connects reducer to initial state and allows for actions to be passed in
    switch(action.type) { 

        case FETCH_SMURFS_START: //changes isLoading to true, allowing for loading... to render on page
            return {
                ...state,
                isLoading: true,
            };
        
        case FETCH_SMURFS_SUCCESS: //turns isLoading off, updateds smurfs array with data from axios.get request to "API"
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: "",
            };

        case FETCH_SMURFS_FAILURE: //turns isLoading off, if something goes wrong, error info is displayed on page
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                }

        case ADD_SMURF: //updates smurf array locally, but does not send new data to API.  I was unsure which was wanted for MVP
            return {
                ...state,
                error: "",
                smurfs: [
                    ...state.smurfs, action.payload
                ]
            }

        case ADD_ERROR: //updates error message
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.