
import './App.css'
import IpForm from "./components/IpForm.tsx";
import IpInfo from "./components/IpInfo.tsx";
import HistoryList from "./components/HistoryList.tsx";


function App() {

  return (
   <>
       <h1>Ip Checker</h1>
       <IpForm/>
       <IpInfo/>
       <HistoryList/>
   </>
  )
}

export default App
