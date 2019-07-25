import React, { Component } from 'react';

import { View,Image,StyleSheet,Button,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AuthWithFB extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                
                <Image source={require('../../assets/mess.png')} style={{width:150,height:150}}/>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>

                <Button
          title="SignIn With Facebook"
          onPress={() => this.props.navigation.navigate('ChatList')}
          
          
        
        />
        
        
                {/* <TouchableOpacity>
            <Text style={styles.text}>
            Note:If You Already Have An Account..
            </Text>
            <Text onPress={()=>this.props.navigation.navigate('ChatList')} style={styles.button}>
                Click Here..
            </Text>
        </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    text:{
      
color:'red',
fontSize:15,
fontWeight:'bold',
fontStyle:'italic',
marginTop:60,
textAlign:'center'
},
button:{
    color:'white',
    backgroundColor:'green',
fontSize:20,
fontWeight:'bold',
fontStyle:'italic',
marginTop:30,
textAlign:'center',
borderRadius:5,
padding:10
}
    
  });

export default AuthWithFB;

