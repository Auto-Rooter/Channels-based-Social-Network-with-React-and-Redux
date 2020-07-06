import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import firebase from './firebase';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import rootReducer from './reducers';
import { setUser } from './actions';


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

    render(){
       return  (
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
        );
    }
}
// Connect will allow us to connect our redux state actions with a given react component.
// what Connect and Map despatcher to props will do, is it will take this setUser actions and 
// put it on props object .

const RootWithAuth = withRouter(connect(null, {setUser})(Root));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
