import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    AsyncStorage
} from 'react-native'

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    signOut = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoding')
    }
    render() { 
        return ( 
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title = " Sign Out" onPress = { this.signOut}/>
            </View>
         );
    }
}
 
export default SettingsScreen;