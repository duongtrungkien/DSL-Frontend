import React, {Component} from 'react'
import {connect} from 'react-redux'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Button from 'react-bootstrap/lib/Button'
import './NavBar.css'
import '../Form/Form'
import Form from "../Form/Form"
import {login, logout} from "../../action/userActions";

const styles = {
    nav: {
        background: '#ffffff'
    }
}

class NavBar extends Component{
    constructor (props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogin (username, password) {
        this.props.dispatch(login(username, password))
    }

    handleLogout (){
        this.props.dispatch(logout())
    }

    render(){
        let {user} = this.props;
        let loginForm = user.id ? <Button className="menu-button" onClick={this.handleLogout}>Logout</Button> : <Form onSubmit={this.handleLogin}/>;


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