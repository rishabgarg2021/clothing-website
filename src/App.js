import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Route} from "react-router-dom";
const Hats = () => (
  <div>Hats Work</div>
)
function App() {
  return (
    <div >
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/hats" component ={Hats}></Route>
    </div>
  );
}

export default App;
