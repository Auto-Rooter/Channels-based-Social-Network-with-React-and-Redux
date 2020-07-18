import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import firebase from './firebase';
import Spinner from "./Spinner"

// Set-up the state managment system redux within index.js

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import rootReducer from './reducers';
import { setUser } from './actions';

// create the global state that store the value from createstore function  
// the rootReducer will get entire state object

const store = createStore(rootReducer, composeWithDevTools())

class Root extends React.Component{  

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                // console.log(user);
                this.props.setUser(user);
                this.props.history.push('/');
            }
        }); 
    } 

// to prevent our users from seeing a blank screen
// we are gonna setup a ternary to show a spinner

    render(){
       return this.props.isLoading ? <Spinner/> : (
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
        );
    } 
}
// in order to set our user data on global state with the set user action we will need the
// connect function from react-redux and as the name implies ,connect will allows to connect our
//  redux-state actions with  agiven react component

// Connect will allow us to connect our redux state actions with a given react component.
// what Connect and Map despatcher to props will do, is it will take this setUser actions and 
// put it on props object .

// since state update are not synchronise it will take certain amount of time to resolve.
// so we will pass the mapStateFromProps function as a first argument to connect() function
// to get loading data from our state object 


const mapStateFromProps = state => ({ 
    isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(
    connect(mapStateFromProps, {setUser})(Root)
    );
// to provide this global state and make it available to all our components , we use the 
// <provider> component wrapping the router with it .
// <provider> will provide our state to any component that want to use it, and that happen by pass the state with store prop

// and all we need to do is to distructur it from the map-dispatcher prop object 

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
