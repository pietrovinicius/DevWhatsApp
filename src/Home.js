import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
} from 'react-native';
import{ connect } from 'react-redux';
import{ checkLogin } from './actions/AuthActions';

export class Home extends Component{

    static navigationOptions = {
        title:'Home',
        header:null
    }

    constructor(props){
        super(props);
        this.state={};

    }

    componentDidMount(){
        console.log(`################ Home - props status: ${this.props.status}`);
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Text>Página Home</Text>
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

const HomeConnect = connect(mapStateToProps, { checkLogin })(Home);
export default HomeConnect;