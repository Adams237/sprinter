import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";



const Home = ()=>{
    const currentUser =  localStorage.getItem('sprinter')
    const navigate = useNavigate()
    useEffect(()=>{
        if(!currentUser){
            navigate('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentUser])
    console.log(currentUser);
    return(
        <div>
            Heloo word
        </div>
    )
}

export default Home