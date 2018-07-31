import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin } from './actions/AuthActions';

export class Preload extends Component {

    static navigationOptions = {
        title: '',
        header: null
    }
    //construtor só roda uma vez, assim que abre a página...
    constructor(props) {
        super(props);
        this.state = {};
        //bind
        this.directPages = this.directPages.bind(this);
        this.props.checkLogin();
    }

    directPages() {
        console.log(`################ directPages`);
        switch (this.props.status) {
            case 1:
                //depois de mudar de tela, precisa desativar/fechar o Preload
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Conversas' })
                    ]
                }));
                break;
            case 2:
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' })
                    ]
                }));
                break;
        }
    }

    componentDidMount() {
        this.directPages();
    }

    //ela é chamada toda vez que algo na tela muda 
    componentDidUpdate() {
        this.directPages();
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Carregando...{this.props.status}</Text>
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
        status: state.auth.status
    };
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);
export default PreloadConnect;