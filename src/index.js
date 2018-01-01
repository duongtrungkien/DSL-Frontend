import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Home from './pages/Home/Index'
import './index.css';
import registerServiceWorker from './registerServiceWorker';



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
