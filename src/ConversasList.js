import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

export class ConversasList extends Component {

    static navigationOptions = {
        title: '',
        tabBarLabel:'Conversas',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        console.log(`################ Conversas \nstatus:${this.props.status}\nuid: ${this.props.uid}`);
    }

    componentDidUpdate() { }


    render() {
        return (
            <View style={styles.container}>
                <Text>Página de Conversas</Text>
                <Text>{this.props.status} {this.props.uid}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        uid: state.auth.uid
    };
};

const ConversasListConnect = connect(mapStateToProps, {})(ConversasList);
export default ConversasListConnect;