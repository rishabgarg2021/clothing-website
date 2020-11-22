import React from "react"
import "./sign-in.styles.scss"
import FormInput from  "../../components/form-input/form-input.component"
class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:"",password:""})
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value})

    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput label="email" handleChange = {this.handleChange} 
                    name="email" type="email" required value={this.state.email}></FormInput>
                     <FormInput label="password" handleChange = {this.handleChange} 
                    name="password" type="password" required value={this.state.password}></FormInput>
                    <input type="submit" value="Submit Form"></input>
                </form>

            </div>
        )

    }
}


export default SignIn;