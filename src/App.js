import logo from './logo.svg';
import './App.css';
import React from "react"
import HomePage from "./pages/homepage/homepage.component"
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import  Header from "./components/header/header.component"
import SignInAndSignUp from "./pages/signin-signup-page/signin-signup-page.component"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
   
      console.log("user is ", userAuth);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          this.setState({currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }}, () => {
            console.log(this.state);
          });
       
        })
      }else{
        this.setState({currentUser: userAuth})
      }
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
  return (
    <div >
      <Header currentUser = {this.state.currentUser}/>
      {/* switch : if any route matcher, it stops rendering from that point. */}

     <Switch>
        <Route  exact  path="/" component={HomePage}></Route>
        <Route  path="/shop" component = {ShopPage}></Route>
        <Route path="/signin" component ={SignInAndSignUp}></Route>
    </Switch>
    </div>
  );
  }
}

export default App;
