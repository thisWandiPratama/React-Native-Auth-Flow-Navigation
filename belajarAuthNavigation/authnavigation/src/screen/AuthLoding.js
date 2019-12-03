import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'

class AuthLoding extends Component {
    constructor() {
        super();
        this.loadApp()
    }

    loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate( userToken ? 'App' : 'Auth')
    }
 
    render() { 
        return ( 
            <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size='large'/>
            </View>
         );
    }
}
 
export default AuthLoding;