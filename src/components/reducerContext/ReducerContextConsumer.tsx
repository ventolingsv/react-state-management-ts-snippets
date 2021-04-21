import React, {useContext} from 'react';
import {MyReducerContext} from "./ReducerContextProvider";
import {INCREMENT_ONE, INCREMENT_TWO} from "./CountersReducer";


export const ReducerContextConsumer1 = () => {
    const { state, dispatch } = useContext(MyReducerContext);

    const increment2 = () => dispatch({ name: INCREMENT_TWO });
    return (
        <div>
            <button onClick={increment2}>Increment</button>
            Functional: Reduced Context count1 is {state.count1}
        </div>
    )
};

export const ReducerContextConsumer2 = () => {
    const { state, dispatch } = useContext(MyReducerContext);

    const increment1 = () => dispatch({ name: INCREMENT_ONE });
    return (
        <div>
            <button onClick={increment1}>Increment</button>
            Functional: Reduced Context count2 is {state.count2}
        </div>
    )
};