import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from './actions/AuthActions';

export class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {};

        this.siginButton = this.siginButton.bind(this);
        this.sigupButton = this.sigupButton.bind(this);
    }

    componentDidMount() {
        console.log(`################ Home - props status: ${this.props.status}`);
    }

    componentDidUpdate(){}

    siginButton() {
        console.log("################ siginButton!!!");
        this.props.navigation.navigate('SignIn');
    }

    sigupButton() {
        console.log("################ sigupButton!!!");
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>DevsWhatsapp 1.0 {this.props.status}</Text>
                <View style={styles.buttonArea} >
                    <Button onPress={this.siginButton} title="Login" />
                    <Button onPress={this.sigupButton} title="Cadastrar" />
                </View>
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
    h1: {
        fontSize: 30,
        marginBottom: 50,
    },
    buttonArea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
});

const mapStateToProps = (state) => {
    return {
        status: state.auth.status
    };
};

const HomeConnect = connect(mapStateToProps, { checkLogin })(Home);
export default HomeConnect;