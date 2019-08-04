import React, { Component } from 'react';

import { View,Image,StyleSheet,Button,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                
              <View style={styles.mainview}>
              <View style={styles.profile}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../../assets/asim.jpg')} style={{width:40,height:40,borderRadius:30,marginTop:10,marginLeft:10}}/>
             
             <Text style={{fontSize:25,fontWeight:'bold',marginTop:5,paddingLeft:10}}> People</Text>
            </View>
            
             <View style={{flexDirection:'row'}}>
             <TouchableOpacity>
    <Image source={require('../../assets/diary.png')} style={{width:20,height:20,marginTop:15,margin:15}}/>
    
</TouchableOpacity>

<TouchableOpacity>
<Image source={require('../../assets/addcontact.png')} style={{width:20,height:20,marginTop:15,margin:20}}/>
</TouchableOpacity>
             
             </View>
          
             </View>
<View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
<Text style={{fontWeight:'bold'}}>All Stories</Text>
</View>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      mainview:{
        //   marginTop:'4%',
        //   margin:"2.5%",
        
          
          flexDirection:'column',
          justifyContent:'space-between',

          flex:1,
          
      },
      profile:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        marginTop:30
    }
})
  

export default People;

