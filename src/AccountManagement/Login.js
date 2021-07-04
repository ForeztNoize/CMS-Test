import { Component } from "react";
import { increment } from '../actions';
import { loggingIn } from '../actions/logged';
import {connect} from 'react-redux';
class Login extends Component {
    
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
        this.ifChange = this.ifChange.bind(this);
        this.ifSubmit = this.ifSubmit.bind(this);
        this.success = this.success.bind(this);
      }  
    
      ifChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
          input
        });
      }  
    
      ifSubmit(event) {
        event.preventDefault();
        if(this.validate()){
            console.log(this.state);
            let input = {};
            input["name"] = "";
            input["password"] = "";
            this.setState({input:input})
            this.success();
        }
      }

      success(event){
          this.props.loggingIn()
      }
    
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
            if (input["password"]  !== "password" || input["name"] !== "admin") {
              isValid = false;
              alert('Wrong password or Username');
            }
          this.setState({
            errors: errors
          });
          return isValid;
      }
    
    render(){
        return(
            <div>
            <form id="loginForm" onSubmit={this.ifSubmit}>
                <input type="text" name="name" value={this.state.input.name} onChange={this.ifChange} id="userInput" placeholder="username" />
                <input type="password" name="password" value={this.state.input.password} onChange={this.ifChange} id="pwdInput" placeholder="Enter password"  />
                <input type="submit" value="Submit" />
            </form>
            {this.props.isLogged ? <h1>Only Visible for Administrator</h1> : ''} 
            </div>

        )
    }

};
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        isLogged: state.isLogged
    }
}
  const mapDispatchToProps = () => {
    return {
      increment,
      loggingIn
    };
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(Login);