import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

import CustomButton from "../custom-button/custom-button.component.jsx";

import FormInput from '../form-inputs/form-input.components.jsx'



import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email:'', password:''})
    }

    handleChange = event =>{
        const {value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='email' label='email' value={this.state.email} required handleChange={this.handleChange}/>
                   
                    <FormInput name="password" type='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
                    <div className='buttons'>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                    Sign in with Google 
                    </CustomButton>
                    </div>
                </form>
        
            </div>
        )
    }
}

export default SignIn