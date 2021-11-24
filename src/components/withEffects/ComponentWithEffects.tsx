import React, {useEffect, useState} from "react";

export const ComponentWithEffects = () => {
    const [count, setCount] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);

    useEffect(
        () => setCount2(c => c + count),
        [ count ]
    );

    return (
        <div onClick={() => setCount(count + 1)}>
            Base count is {count}
            Effect count is {count2}
        </div>
    )
};