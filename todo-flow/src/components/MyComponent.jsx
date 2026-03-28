import { useEffect, useState } from "react";



function MyComponent(){

    const [count, setCount] = useState(0)

    function increaseCount(){
        // provide previous update 
        // setCount(count + 1)
        setCount(c => c + 1)
        console.log("from use state count: " + count)
    }

    useEffect(()=>{
        // it provide current update 
        console.log("from use Effect count: " + count)
    }, [count])

    //......[OUTPUT] from console log    
    // from use state count: 0
    // from use Effect count: 1

    // from use state count: 1
    // from use Effect count: 2

    return (
        <div>
            {/* current update  */}
            <p> Counting: {count} </p>
            <button onClick={increaseCount} >Increase</button>
        </div>
    )
}

export default MyComponent