
import './App.css';
function getTime(){
    return <div>
      It is {new Date().toLocaleTimeString()}
    </div>
}

function App() {
  return (
    <div className="App">

        Hello World I'm @DevFanor {getTime()}
    </div>
  );
}

export default App;
