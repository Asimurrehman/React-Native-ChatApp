import React, { Component } from 'react';
import { auth,getAllUsers,createChatRoom } from '../config/firebase'

import { View,Text ,StyleSheet,Button,ScrollView,Image} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';



export default  class ChatList extends Component {
    static navigationOptions={
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            user: auth.currentUser,
            users: [],
          };
          this._createChatRoom = this._createChatRoom.bind(this);
    }

    async componentDidMount() {
    

        let a = await getAllUsers();
        console.log('resolved of getAllUsers--------->', a)
        this.setState({ users: a })
    }

    async _createChatRoom(item) {
        try {
            let a = await createChatRoom(item);
            console.log('return promise resolved data--------->', a.data);
            console.log(a.chatroomID);
            // this.props.history.push(`/chat/${a.chatroomID}`);
            let chatroomID = a.chatroomID;
            item.chatroomID = chatroomID;
            this.props.navigation.navigate('ChatScreen', { user: item })
        }
        catch (err) {
            console.log('error in creating chatroom', err.message)
            alert(err.message);
        }
    }

    render() {
        const { user, users } = this.state;
        console.log('users in state------>', users)
        return (
            <View style={styles.container}>
          <View style={styles.mainview}>
         <View style={styles.profile}>
            <View style={{flexDirection:'row'}}>
            <Image  source={{ uri: user.photoURL }} style={{width:40,height:40,borderRadius:30,marginTop:10,marginLeft:10}}/>
             
             <Text style={{fontSize:25,fontWeight:'bold',marginTop:5,paddingLeft:10}}> Chats</Text>
            </View>
            
             <View style={{flexDirection:'row'}}>
             <TouchableOpacity>
    <Image source={require('../../assets/camera.png')} style={{width:20,height:20,marginTop:15,margin:15}}/>
    
</TouchableOpacity>

<TouchableOpacity>
<Image source={require('../../assets/icon2.png')} style={{width:20,height:20,marginTop:15,margin:20}}/>
</TouchableOpacity>
             
             </View>
          
             </View>

         <ScrollView>
        <TextInput placeholder='Search' style={{borderRadius:20,padding:10,fontSize:15,marginTop:20,marginLeft:5,marginRight:5,backgroundColor:'#ecf0f1',color:'darkgray'}}/>


        <ScrollView horizontal style={{marginTop:10}}> 
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/plus.png')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Your Story</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image  source={{ uri: user.photoURL }} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>{user.displayName}</Text>
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
            <Image source={require('../../assets/hamza.jpg')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Hamza Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',margin:10}}>
            <Image source={require('../../assets/imad.jpg')} style={{width:50,height:50,borderRadius:30}}/>

            <Text style={{color:'darkgray',fontSize:12}}>Muhammad Imad</Text>
        </TouchableOpacity>

        </ScrollView>
        <View>

            {!!users  && users.map((item,key)=>{
                return(
                    <TouchableOpacity style={{margin:10,flexDirection:'row'}}  onPress={() => this._createChatRoom(item, key)}>
                <Image source={{ uri: item.photoURL }} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> {item.displayName}</Text>
            </TouchableOpacity>
                )
            })}
            {/* <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen',{UserName:'C.Ronaldo'})}>
                <Image source={require('../../assets/cr.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> C.Ronaldo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen',{UserName:'Imran Khan'})}>
                <Image source={require('../../assets/imran.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Imran Khan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen',{UserName:'Georgina'})}>
                <Image source={require('../../assets/georg.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Georgina</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen',{UserName:'Mark Zukarburge'})}>
                <Image source={require('../../assets/pro.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Mark Zukarburge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen',{UserName:'Meryam Saeed'})}>
                <Image source={require('../../assets/meryam.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Meryam Saeed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen',{UserName:'C.Ronaldo'})}>
                <Image source={require('../../assets/hamza.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Hamza Khan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('ChatScreen',{UserName:'C.Ronaldo'})}>
                <Image source={require('../../assets/imad.jpg')} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:10,paddingLeft:5,fontSize:15}}> Muhammad Imad</Text>
            </TouchableOpacity>
           */}
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


