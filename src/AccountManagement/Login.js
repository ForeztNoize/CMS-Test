import { Component } from "react";
class Login extends Component {
    render(){
        return(
            <form id="loginForm" action="">
                <input type="text" name="username" id="userInput" placeholder="username" />
                <input type="password" name="password" id="pwdInput" placeholder="password" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
};
export default Login;