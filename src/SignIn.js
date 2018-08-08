import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import {
    checkLogin,
    changeEmail,
    changePassword,
    SignInAction,

} from './actions/AuthActions';

export class SignIn extends Component {

    static navigationOptions = {
        title: 'Login'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(`################ SignIn / Login`);
    }

    componentDidUpdate() {
        console.log(`usuario: ${this.props.uid}\nstatus:${this.props.status}`);
        if (this.props.status == 1) {
            //Para fechar o teclado antes de mudar de tela
            Keyboard.dismiss();
            this.props.navigation.navigate('Conversas');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                
                <Text>uid: {this.props.uid} </Text>
                <Text>status: {this.props.status} </Text>
                <Text>Email: </Text>
                <TextInput style={styles.input}
                    value={this.props.email}
                    onChangeText={this.props.changeEmail} />
                <Text>Password:</Text>
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    value={this.props.password}
                    onChangeText={this.props.changePassword}
                />
                <Button title="Login" onPress={() => {
                    this.props.SignInAction(this.props.email, this.props.password);
                }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        fontSize: 18,
        height: 50,
        backgroundColor: '#DDDDDD',
    },
});

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid,
        email: state.auth.email,
        password: state.auth.password,
        status: state.auth.status
    };
};

const SignInConnect = connect(mapStateToProps, {
    checkLogin,
    changeEmail,
    changePassword,
    SignInAction,
})(SignIn);
export default SignInConnect;