import React, {useEffect, useState} from 'react';
import './App.css';

const App=()=>{

    const [value, setValue] = useState<string>('')
    useEffect(()=>{setValue(value)})

    const [counter, setCounter] = useState<number>(0)


    return (
        <div>
            <div>
                <h2>{value}</h2>
                <button onClick={() => {
                    setValue('TRUE')
                }}>TRUE
                </button>
                <button onClick={() => {
                    setValue('FALSE')
                }}>FALSE
                </button>
            </div>
            <div>
                <button onClick={()=>{
                    setCounter((prevState):any  => {
                        console.log(prevState)
                        return prevState + 1
                    })
                }}>click{counter}
                </button>
            </div>
        </div>
    );
}

export default App;
