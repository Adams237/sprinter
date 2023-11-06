import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";



const Home = ()=>{
    const currentUser =  localStorage.getItem('sprinter')
    const navigate = useNavigate()
    useEffect(()=>{
        if(!currentUser){
            navigate('/login')
        }
    },[currentUser])
    console.log(currentUser);
    return(
        <div>
            Heloo word
        </div>
    )
}

export default Home