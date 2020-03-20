import React from "react";
import {connect} from "react-redux";
import { getCount, increment, incrementAsync, RootStore } from "./StoreProvider";
import { CounterState } from '../Types';

const StoreConsumer = (props: CounterProps) => (
    <div onClick={props.increment}>
        Class count is {props.count}
    </div>
);

const mapStateToProps = (state: RootStore) => ({
   count: getCount(state)
});

type CounterProps = CounterState & {
    increment: () => void
}

export const ConnectedStore = connect(mapStateToProps, { increment })(StoreConsumer);
export const AsyncConnectedStore = connect(mapStateToProps, { increment: incrementAsync })(StoreConsumer);