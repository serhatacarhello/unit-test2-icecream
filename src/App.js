import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Scoop from "./components/Scoops";
import Toppings from "./components/Toppings";

function App() {
  return (
    <div className="App">
      <Header />
      <Scoop />
      <Toppings />
      <Form />
    </div>
  );
}

export default App;
