import React from "react"
import "./sign-up.styles.scss"
import FormInput from  "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email,  password, confirmPassword} = this.state;
        if(password != confirmPassword){
            alert("password don't match")
            return
        }
        try{
            //this will only create the user. once the user is created, we want to create that user
            //in db also.
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            })

        }catch(error){
            console.log("error while creating user is  ",error)
        }

    }
    handleChange = event => {
        //name will be matching the state keys of input name.
        const {name, value} = event.target;
        this.setState({[name] : value})

    }

    render(){
        const {displayName, email,  password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} 
                    onChange={this.handleChange} required label="Display Name"></FormInput>


                    <FormInput label="Email" handleChange = {this.handleChange} 
                    name="email" type="email" required value={email}></FormInput>


                     <FormInput label="Password" handleChange = {this.handleChange} 
                    name="password" type="password" required value={password}></FormInput>

                    <FormInput label="Confirm Password" handleChange = {this.handleChange} 
                    name="confirmPassword" type="password" required value={confirmPassword}></FormInput>


                   <div className="buttons">
                        <CustomButton  type="submit"> Sign Up</CustomButton>
                    </div>

                </form>

            </div>
        )

    }
}


export default SignUp;