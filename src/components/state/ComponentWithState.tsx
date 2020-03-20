import React, {useState} from "react";
import {CounterState} from '../Types';

export class ComponentWithState extends React.PureComponent<{}, CounterState> {
    state: CounterState = { count: 0 };

    increment = () => this.setState((state: CounterState) => ({ count: state.count + 1 }));

    render() {
        return (
            <div onClick={this.increment}>
                Class count is {this.state.count}
            </div>
        )
    }
}

export const FunctionalState = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div onClick={() => setCount(count + 1)}>
            Functional: count is {count}
        </div>
    )
};