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
    changeName,
    SignUpAction,
} from './actions/AuthActions';

export class SignUp extends Component {

    static navigationOptions = {
        title: 'Cadastrar'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(`################ SignUp / Cadastrar`);
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
                <Text>Nome: </Text>
                <TextInput style={styles.input}
                    value={this.props.name}
                    onChangeText={this.props.changeName} />
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
                <Button title="Cadastrar" onPress={() => {
                    this.props.SignUpAction(this.props.name, this.props.email, this.props.password);
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
        status: state.auth.status,
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,
    };
};

const SignUpConnect = connect(mapStateToProps, {
    checkLogin,
    changeName,
    changeEmail,
    changePassword,
    SignUpAction
})(SignUp);
export default SignUpConnect;