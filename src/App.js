import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import  Header from "./components/header/header.component"
import SignInAndSignUp from "./pages/signin-signup-page/signin-signup-page.component"
function App() {
  return (
    <div >
      <Header/>
      {/* switch : if any route matcher, it stops rendering from that point. */}

     <Switch>
        <Route  exact  path="/" component={HomePage}></Route>
        <Route  path="/shop" component = {ShopPage}></Route>
        <Route path="/signin" component ={SignInAndSignUp}></Route>
    </Switch>
    </div>
  );
}

export default App;
