import React, { PropsWithChildren } from "react";
import { Provider } from 'react-redux';
import { Action, applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import {CounterState} from '../Types';

//Action types
const INCREMENT = 'INCREMENT';

type CounterAction = Action<string> & {
    value: number
}

//Reducer
const initialState: CounterState = {
    count: 0
};

function reducer (state = initialState, action: CounterAction): CounterState {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.value
            };
        default: return state;
    }
}

//Store
export type RootStore = {
    reducer: CounterState
}

const store: Store<RootStore> = createStore(combineReducers({
    reducer
}), applyMiddleware(thunk));

export const StoreProvider = (props: PropsWithChildren<{}>) => (
    <Provider store={store}>
        {props.children}
    </Provider>
);

//Actions
export const increment: () => CounterAction = () => ({
    type: INCREMENT,
    value: 2
});

export const incrementAsync = (): ThunkAction<void, RootStore, void, Action<string>> => async (dispatch, getState) => {
    console.log(getCount(getState()));
    await new Promise((resolve) => resolve());
    dispatch(increment());
};

//Selectors
export const getCount = (state: RootStore) => state.reducer.count;