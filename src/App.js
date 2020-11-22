import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
const Hats = () => (
  <div>Hats Work</div>
)
function App() {
  return (
    <div >
      <Route  exact path="/" component={HomePage}></Route>
      <Route  path="/hats" component ={Hats}></Route>
      <Route exact path="/shop" component = {ShopPage}></Route>

    </div>
  );
}

export default App;
