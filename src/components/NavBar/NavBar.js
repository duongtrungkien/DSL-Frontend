import React, {Component} from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import './NavBar.css'
import '../Form/Form'
import Form from "../Form/Form";

const styles = {
    nav: {
        background: '#cecece'
    }
}


export default class NavBar extends Component{
    render(){
        return(
            <Nav style={styles.nav} bsStyle="pills" activeKey={1} >
                <NavItem className="nav-item"  eventKey={1} href="/">Home</NavItem>
                <NavItem className="nav-item"  eventKey={1} href="/">Home</NavItem>
                <NavItem className="nav-item"  eventKey={1} href="/">Home</NavItem>
                <Form/>
            </Nav>
        )
    }
}