import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'

class AuthLoding extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title= 'SignIn' onPress = { () => this.props.navigation.navigate('SignIn')}/>
                <Button title= 'SignUp' onPress = { () => this.props.navigation.navigate('SignUp')}/>
            </View>
         );
    }
}
 
export default AuthLoding;