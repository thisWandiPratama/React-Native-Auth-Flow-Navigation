import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> SignUp</Text>
            </View>
         );
    }
}
 
export default SignUp;