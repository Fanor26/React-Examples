
import {useState} from "react";
import './App.css';
function getTime(){
    return <div>
      It is {new Date().toLocaleTimeString()}
    </div>
}

function App() {
    const [Time,setTime]= useState(getTime());
    setInterval(()=>{
    setTime(getTime())

    },1000)
  return (
    <div className="App">

        Hello World I'm @DevFanor {Time}
    </div>
  );
}

export default App;
