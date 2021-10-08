import React, { useState } from 'react'


const App = () =>{
    const state= useState();
    const [count,setCount]=useState(20);

    const IncNum= () =>{
        setCount(count +1);

    }

    return(
        <>
        <div class="container">
        
        <h1> {count}</h1>

        <button onClick={IncNum}>click me</button>
        </div>
        </>
    )

}
export default App;