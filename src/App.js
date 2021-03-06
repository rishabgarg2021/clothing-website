import logo from './logo.svg';
import './App.css';
import React from "react"
import HomePage from "./pages/homepage/homepage.component"
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import  Header from "./components/header/header.component"
import SignInAndSignUp from "./pages/signin-signup-page/signin-signup-page.component"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions"
class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    //the callback of this function will help to unsubscribe of the the listener.
    //whenever a signin or signout is performed in the app, this will be invoked and userauth can be null
    //which will set the state of the current user as null. it will also update the header.
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      console.log("callback on auth change for user ", userAuth);
      if(userAuth) {
        //we will create the user, if it is not already present.

        const userRef = await createUserProfileDocument(userAuth);

        // this.will be the ref of user in db.
        //we can use this to check what data is present in user and set the state accordingly.
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
       
        })
      }else{
        setCurrentUser({currentUser: userAuth})

      }

     
      
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
  return (
    <div >
      <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
