import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    AsyncStorage
} from 'react-native'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    signIn = async () => {
        await AsyncStorage.setItem('userToken','wandi')
        this.props.navigation.navigate('App')
    }

    render() { 
        return ( 
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title = ' Complate Sign In' onPress = { this.signIn}/>
            </View>
         );
    }
}
 
export default SignIn;