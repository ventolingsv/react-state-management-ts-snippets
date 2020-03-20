import React, {useContext} from 'react';
import {MyContext} from "./ContextProvider";
import {CounterState} from '../Types';

export const ContextConsumer = () => (
    <MyContext.Consumer>
        { (context: CounterState) => <div>Consumer: Context count is {context.count}</div> }
    </MyContext.Consumer>
);

export class ClassContextConsumer extends React.PureComponent {
    static contextType = MyContext;

    render () {
        return <div>Class: Context count is {this.context.count}</div>
    }
}

export const FunctionalContextConsumer = () => {
    const context = useContext(MyContext);

    return <div>Functional: Context count is {context.count}</div>
};