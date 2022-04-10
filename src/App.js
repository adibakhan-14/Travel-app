import { useEffect, useState } from "react";
import "./App.css"



export default function App(){
  const [trips, setTrips]= useState([]) //first time rendering the app
   const [url, setUrl]= useState('http://localhost:3000/trips')
useEffect(()=>{
  fetch(url).then((response)=> response.json()).then((data)=> setTrips(data))
}, [url]) //first mount
  console.log(trips);
  return (
    <div className="container">
      <h1>
        Travel Site
      </h1>
      <div className="filter-trips">
      <button onClick={()=>setUrl("http://localhost:3000/trips")}>All trips</button>
      <button onClick={()=> {setUrl("http://localhost:3000/trips?type=Water")}}>Boat trip</button>
      <button  onClick={()=> {setUrl("http://localhost:3000/trips?type=Air")}}>Air trip</button>
      <button  onClick={()=> {setUrl("http://localhost:3000/trips?type=Road")}}>Road trip</button>
      </div>
      <ul className="trip-list">
        {trips.map((data) => (
          <li >
            <h2>
              {data.title}
            </h2>
            <p>{data.price}</p>
            <h3>{data.duration}</h3>
          </li>
        ))
        }
      </ul>
      
      

    </div>
  )
}