import Header from "../Header"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import "./index.css"
import Cookies from "js-cookie"

export default function Fullcard(){

    const[final,setfinal]=useState({})

    const req=useParams()

    console.log("got it",req)
    useEffect(()=>{
        const jwtToken= Cookies.get("jwt_token")
        fetch(`http://localhost:4000/workouts/${req.id}`,{method:"GET", headers: {
            Authorization: `Bearer ${jwtToken}`,
          }}).then(res=>(res.json()))
        .then((data)=>{
            console.log("jeffa",data)
            setfinal(data)})

        
    },[])


    return(
        <div className="main-home-container">
            <Header/>
            {/* <div className="for-look">            */}
                 <div className="final-card-container for-look">
                {final=={}?"":
                    <div className="fullcard-image-container">
                    <img src={final.imageurl} className="fullcard-image"/>
                    <h1 className="card-head-calorie">calorie/hour:{final.Calorieburnperhour} calorie</h1>
                    <h1>{final.heading}</h1>
                     <p className="full-card-para-cont">{final.fulldiscription}</p>
                    </div>
                
               
                    }
                    {/* </div>        */}
        </div>
        </div>

    )
}