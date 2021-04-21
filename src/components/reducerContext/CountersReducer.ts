import {CountersState} from "../Types";

export const INCREMENT_ONE = "INCREMENT_ONE";
export const INCREMENT_TWO = "INCREMENT_TWO";

export interface CountersAction {
    name: string
}

const countersReducer = (state: CountersState, action: CountersAction) => {
    switch (action.name) {
        case INCREMENT_ONE:
            return {
                ...state,
                count1: state.count1 + 1
            };
        case INCREMENT_TWO:
            return {
                ...state,
                count2: state.count2 + 1
            }
        default: return state;
    }
}

export default countersReducer;