import React, {useState, useEffect} from 'react';

export function UseEffect() {
    let [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `This is come from useEffect ${count}`
    }, [count]);

    return (
        <div>
            <h1 id='UserEffectExample'></h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}