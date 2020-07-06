import React from 'react';
import firebase from '../../firebase';
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class Register extends React.Component {

    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    } 

    handleSubmit = event => {
        event.preventDefault();
        // promise
        firebase.auth()
                .createUserWithEmailAndPassword(
                    this.state.email, this.state.password
                ).then(createdUser => {
                    console.log(createdUser);
                })
                .catch(err => {
                    console.log(err);
                })
    } 

    render() {
        const {username, email, password, passwordConfirmation} = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                         <Icon name="puzzle piece" color="orange"/>
                         Register for DevChat
                    </Header>
                    <Form  onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" value={username} onChange= {this.handleChange} type="text"/>
                            <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" value={email} onChange= {this.handleChange} type="email"/>
                            <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" value={password} onChange= {this.handleChange} type="password"/>
                            <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation "value={passwordConfirmation}  onChange= {this.handleChange} type="password"/>

                            <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Already a user ? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register