import React, {Component} from 'react'
import '../../components/NavBar/NavBar'
//import Button from 'react-bootstrap/lib/Button'
import NavBar from "../../components/NavBar/NavBar";
import {getAll} from "../../action/categoryAction"
import {connect} from "react-redux";
//import category from "../../reducer/category";





class Home extends Component {
    constructor(props){
        super(props)
        this.props.dispatch(getAll())
    }

    componentDidMount() {

    }


    render(){
        let {items, status} = this.props.category;

        return(
            <div>
                <NavBar/>
                {status}
                <ul>
                    {items.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    let {category} = state
    return {category}
}

export default connect(mapStateToProps)(Home)
