import React from 'react';

import { ComponentWithState, FunctionalState } from './components/state/ComponentWithState';
import ContextProvider from './components/context/ContextProvider';
import { ClassContextConsumer, ContextConsumer, FunctionalContextConsumer } from './components/context/ContextConsumer';
import { StoreProvider } from './components/redux/StoreProvider';
import { AsyncConnectedStore, ConnectedStore } from './components/redux/StoreConsumer';

import './App.css';
import ReducerContextProvider from "./components/reducerContext/ReducerContextProvider";
import {ReducerContextConsumer1, ReducerContextConsumer2} from "./components/reducerContext/ReducerContextConsumer";

const App = () => {
    return (
        <div className="App">
            <div>
                <b>State</b>
                <ComponentWithState/>
                <FunctionalState/>
            </div>
            <div>
                <b>Context</b>
                <ContextProvider>
                    <ContextConsumer/>
                    <ClassContextConsumer/>
                    <FunctionalContextConsumer/>
                </ContextProvider>
            </div>
            <div>
                <b>Context with Reducer</b>
                <ReducerContextProvider>
                    <ReducerContextConsumer1 />
                    <ReducerContextConsumer2 />
                </ReducerContextProvider>
            </div>
            <div>
                <b>Redux</b>
                <StoreProvider>
                    <ConnectedStore/>
                    <AsyncConnectedStore/>
                </StoreProvider>
            </div>
        </div>
    );
}

export default App;