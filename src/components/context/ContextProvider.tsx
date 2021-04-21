import React, { PropsWithChildren, useState } from "react";

import {CounterState} from '../Types';

export const MyContext = React.createContext<CounterState>({ count: 0 });

const ContextProvider = (props: PropsWithChildren<{}>) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    console.log('context renders');
    return (
        <div className="list">
            <button onClick={increment}>Increment</button>
            <div>
                <MyContext.Provider value={{ count }}>
                    {props.children}
                </MyContext.Provider>
            </div>
        </div>
    )
};

export default ContextProvider;