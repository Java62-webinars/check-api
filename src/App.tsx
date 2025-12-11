
import './App.css'
import IpForm from "./components/IpForm.tsx";
import IpInfo from "./components/IpInfo.tsx";
import HistoryList from "./components/HistoryList.tsx";
import {IpProvider} from "./components/IpContext.tsx";


function App() {

  return (
   <IpProvider>
       <h1>Ip Checker</h1>
       <IpForm/>
       <IpInfo/>
       <HistoryList/>
   </IpProvider>
  )
}

export default App
