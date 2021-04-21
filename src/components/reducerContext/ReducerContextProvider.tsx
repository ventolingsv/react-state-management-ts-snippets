import React, {PropsWithChildren, useReducer} from "react";

import {CountersState} from "../Types";
import countersReducer, {CountersAction} from "./CountersReducer";

const initialState = { count1: 0, count2: 0 };

export const MyReducerContext = React.createContext<CountersControls>({
    state: initialState,
    dispatch: () => {}
});

const ReducerContextProvider = (props: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(countersReducer, initialState);
    console.log('reducer context renders');
    return (
        <div className="list">
            <div>
                <MyReducerContext.Provider value={{ state, dispatch }}>
                    {props.children}
                </MyReducerContext.Provider>
            </div>
        </div>
    )
};

export interface CountersControls {
    state: CountersState
    dispatch: React.Dispatch<CountersAction>
}

export default ReducerContextProvider;