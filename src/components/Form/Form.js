import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'
import './Form.css'

axios.defaults.baseURL = 'http://localhost:5000/api';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {password: '', username:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(e, type) {
        if(type === "password") {
            this.setState({password: e.target.value});
        }
        else if(type === "username"){
            this.setState({username: e.target.value});
        }
    }

    handleClick(){
        let {username, password} = this.state;

        axios.post('/login',{
            username,
            password,
        })
        .then(function (response) {
            console.log(response);
        })
    }

    render() {
        return (
            <form>
                <Button className="menu-button" onClick={this.handleClick}>Login</Button>
                <FormGroup className="bar-form" controlId="password">
                    <FormControl
                        type="password"
                        value={this.state.value}
                        placeholder="Password"
                        onChange={e => this.handleChange(e, 'password')}
                    />
                </FormGroup>
                <FormGroup className="bar-form" controlId="user-name">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="User Name"
                        onChange={e => this.handleChange(e, 'username')}
                    />
                </FormGroup>
            </form>
        );
    }
}