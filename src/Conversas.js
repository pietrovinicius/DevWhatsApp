import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
} from 'react-native';
import{ connect } from 'react-redux';
import{ checkLogin } from './actions/AuthActions';

export class Conversas extends Component{

    static navigationOptions = {
        title:'Home',
        header:null
    }

    constructor(props){
        super(props);
        this.state={};

    }

    componentDidMount(){
        console.log(`################ Conversas - props status: ${this.props.status}`);
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Text>Página Conversas</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin:10
    }
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status
    };
};

const ConversasConnect = connect(mapStateToProps, { checkLogin })(Conversas);
export default ConversasConnect;