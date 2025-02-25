import React, {useEffect, useState} from "react";

function App(){
    const [dogs, setdogs]=useState([])
    const [loaded, setloaded]=useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((dog)=>
            {setdogs(dog.message)
            setloaded(true)})   
    },[])

    if(!loaded) return <p>Loading...</p>

    return(
        <img src={dogs} alt="A Random Dog"></img>
    )
    

}

export default App;