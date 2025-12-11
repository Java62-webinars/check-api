
import './App.css'
import IpForm from "./components/IpForm.tsx";
import IpInfo from "./components/IpInfo.tsx";
import HistoryList from "./components/HistoryList.tsx";
import {useEffect} from "react";

function App() {
useEffect(() =>{
    fetch("https://ipapi.co/json/")
    .then(res => res.json())
        .then(data =>{
            console.log("Test responce API", data);
        })
        .catch(e =>{
            console.log(e);
        });
},[])

  return (
   <div>
       <h1>Ip Checker</h1>
       <IpForm/>
       <IpInfo/>
       <HistoryList/>
   </div>
  )
}

export default App
