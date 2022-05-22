
import Time from "./Example1/Time"
import CounterComponent from "./Example2/Counter";
import './App.scss';


function App() {

    return (
        <div className="App">

        <Time/>
            <CounterComponent initialValue="100" limiValue="1000"/>
        </div>
    );
}

export default App;
