import React, {Component} from 'react'
import {connect} from 'react-redux'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import './NavBar.css'
import '../Form/Form'
import Form from "../Form/Form"
import {login} from "../../action/userActions";

const styles = {
    nav: {
        background: '#ffffff'
    }
}

class NavBar extends Component{
    constructor (props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin (username, password) {
        this.props.dispatch(login(username, password))
    }

    render(){
        let {user} = this.props;
        let loginForm = user.id ? user.first_name : <Form onSubmit={this.handleLogin}/>;


        return(
            <Nav style={styles.nav} bsStyle="pills" >
                <a href="/" className="material-icons nav-icon">home</a>
                <NavItem className="nav-item" href="/">About</NavItem>
                <NavItem className="nav-item" href="/">Contact</NavItem>
                {loginForm}
            </Nav>
        )
    }
}


function mapStateToProps(state) {
    let {user} = state
    return {user}
}

export default connect(mapStateToProps)(NavBar)