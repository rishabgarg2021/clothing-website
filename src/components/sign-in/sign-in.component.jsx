import React from "react"
import "./sign-in.styles.scss"
import FormInput from  "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{

            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"", password:""});
            
        }catch(error){
            console.log("error while sign in is ", error.message);
        }
        this.setState({email:"",password:""})
    }
    handleChange = event => {

        const {name, value} = event.target;
        this.setState({[name] : value})

    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput label="email" handleChange = {this.handleChange} 
                    name="email" type="email" required value={this.state.email}></FormInput>
                     <FormInput label="password" handleChange = {this.handleChange} 
                    name="password" type="password" required value={this.state.password}></FormInput>
                   <div className="buttons">
                        <CustomButton  type="submit"> Sign In</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >
                            Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>
        )

    }
}


export default SignIn;