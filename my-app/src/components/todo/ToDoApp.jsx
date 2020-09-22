import { render } from '@testing-library/react'
import React, {Component} from 'react';

export default class ToDoAppComponent extends Component{
    render(){
        return (
           <LoginComponent></LoginComponent>
        )
    }
}

class LoginComponent extends Component{

    //Constructor
   
    constructor(){
        super()
        this.state = {
            userName : "soumitra",
            password : "",
            loginSucess : false,
            invalidCred : false
        }
        // this.userNameChangeHandler = this.userNameChangeHandler.bind(this)
        // this.passwordChangeHandler = this.passwordChangeHandler.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.loginHandler = this.loginHandler.bind(this)
    }

    // userNameChangeHandler(event){
    //     console.log(event.target.value)
    //     this.setState({userName : event.target.value})
    // }
    // passwordChangeHandler(event){
    //     console.log(event.target.value)
    //     this.setState({password : event.target.value})
    // }

    handlechange(event){
        //console.log(this.state)
        this.setState({[event.target.name] : event.target.value})
    }

    loginHandler(event){
        
        if(this.state.userName === "s" & this.state.password === "s"){
            console.log("Login Success")
            this.setState({loginSucess : true, invalidCred : false})
        }else{
            console.log("Login Fail")    
            this.setState({loginSucess : false, invalidCred : true})
        }
    }
    render(){
        return (
                       
            <div>
                {/*<ShowLoginSuccess isLogin={this.state.loginSucess}></ShowLoginSuccess>
                <ShowInvalidCred isInvalid={this.state.invalidCred}></ShowInvalidCred>
                */}
                {this.state.loginSucess && <div>Login Successfull</div>}
                {this.state.invalidCred && <div>Invalid Credentials</div>}
                UserName : <input type="text" name = "userName" value={this.state.userName} onChange={this.handlechange}></input>
                Password : <input type="password" name = "password" value={this.state.password} onChange={this.handlechange}></input>
                <button onClick={this.loginHandler}>Login</button>
            </div>
        )
    }
}

function ShowInvalidCred(props){
    if(props.isInvalid){
        return <div>Invalid Credentials</div>
    }
    return null;
}
function ShowLoginSuccess(props){
    if(props.isLogin)
        return <div>Login Successfull</div>
    return null;
}