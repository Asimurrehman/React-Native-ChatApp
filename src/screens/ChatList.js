import React, { Component } from 'react';

import { View,Text ,StyleSheet,Button,ScrollView,Image} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';


export default  class ChatList extends Component {
    static navigationOptions={
        header:null
    }
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
            <Image source={require('../../assets/asim.jpg')} style={{width:40,height:40,borderRadius:30,marginTop:5}}/>
             
             <Text style={{fontSize:25,fontWeight:'bold',marginTop:8,paddingLeft:10}}> Chats</Text>
            </View>
            
             <View style={{flexDirection:'row'}}>
             <TouchableOpacity>
    <Image source={require('../../assets/icon1.png')} style={{width:30,height:30,borderRadius:30,marginTop:5}}/>
    
</TouchableOpacity>

<TouchableOpacity>
<Image source={require('../../assets/icon2.png')} style={{width:35,height:35,borderRadius:30,marginTop:5}}/>
</TouchableOpacity>
             
             </View>
          
             </View>

         <ScrollView>
        <TextInput placeholder='Search' style={{borderRadius:20,padding:10,fontSize:15,marginTop:25,backgroundColor:'#ecf0f1',color:'darkgray'}}/>


        <ScrollView horizontal style={{marginTop:10}}> 
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/plus.png')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Your Story</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/pro.jpg')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Mark Zuker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/cr.jpg')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>C.Ronaldo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/georg.jpg')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Georgina</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/imran.jpg')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Imran Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/meryam.jpg')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Meryam Saeed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/plus.png')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Your Story</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/plus.png')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Your Story</Text>
        </TouchableOpacity>

        </ScrollView>
        <View>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                <Image source={require('../../assets/cr.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> C.Ronaldo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                <Image source={require('../../assets/imran.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Imran Khan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                <Image source={require('../../assets/georg.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Georgina</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                <Image source={require('../../assets/pro.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Mark Zukarburge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                <Image source={require('../../assets/meryam.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Meryam Saeed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                <Image source={require('../../assets/asim.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Syed Asim Ur Rehman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                <Image source={require('../../assets/asim.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Syed Asim Ur Rehman</Text>
            </TouchableOpacity>
          
        </View>
             </ScrollView>
             



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
          marginTop:'7%',
          margin:"2.5%",
        //   borderWidth:1,
          
          flexDirection:'column',
          justifyContent:'space-between',

          flex:1,
          
      },
      profile:{
          flexDirection:'row',
          justifyContent:'space-between',
          marginBottom:10
      }
})


