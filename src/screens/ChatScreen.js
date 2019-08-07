import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { sendMessagesToDB, auth ,db} from '../config/firebase'
import moment from 'moment'

import { View,Text ,StyleSheet,Image,KeyboardAvoidingView,FlatList} from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';

export default  class ChatScreen extends Component {

    static navigationOptions={
        
        headerTitle: 
        <View style={{justifyContent:'space-between',flex:1,flexDirection:'row'}}>
             <View style={{flexDirection:'row'}}>
        <Image source={require('../../assets/cr.jpg')} style={{width:35,height:35,borderRadius:30,marginTop:5,marginBottom:0}}/>
        <Text style={{fontSize:15,paddingLeft:5}}>Faheem Khan</Text>
        </View> 
    <View  style={{flexDirection:'row',marginRight:10,marginTop:10}}>
    <TouchableOpacity>
    <Image source={require('../../assets/phone.png')} style={{width:20,height:20,marginTop:5,margin:15}}/>
</TouchableOpacity>
<TouchableOpacity>
    <Image source={require('../../assets/vediorecorder.png')}  style={{width:25,height:25,marginTop:5,margin:15}}/>
</TouchableOpacity>
<TouchableOpacity>
    <Image source={require('../../assets/question.png')}  style={{width:20,height:20,marginTop:5,margin:15}}/>
</TouchableOpacity>
    </View>
        </View>
    }
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.navigation.getParam('user'),
            text: '',
            messages: [],
          };
          this._sendMessage = this._sendMessage.bind(this);
    }

    _sendMessage() {
        const { text, user } = this.state;
        console.log('text----->', text)
        const chatroomID = user.chatroomID;
        // console.log(chatroomID);
        sendMessagesToDB(chatroomID, text)
        this.setState({ text: '' })
      }
      
  componentDidMount() {
    this._getAllMessages();
  }
  async _getAllMessages() {
    const { user } = this.state;
    const chatroomID = user.chatroomID;
    console.log('componentDidMount--chatroomID', chatroomID);

    db.collection('chatrooms').doc(chatroomID).collection('messages')
      .orderBy('timestamp')
      .onSnapshot(snapshot => {
        const messages = [];
console.log('massagagagag',messages)
        snapshot.forEach(elem => {
          // let key = { data: elem.data(), id: elem.id }
          messages.push({ data: elem.data(), id: elem.id })  // originial
          // messages.push({ key: { data: elem.data(), id: elem.id } })
          // messages.push(key);
        })
        console.log('messages------>', messages)

        this.setState({ messages })

      })
  }
    // componentDidMount(){
    //     this.props.navigation.setParam({UserName:this.props.navigation})
    // }
    render() {
        const { user, text, messages } = this.state;
        return (
            <View  style={styles.container}>
              <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
                <View style={styles.mainview}>
<View style={styles.profile}>
{!!messages.length &&
            <FlatList
              data={messages}
              renderItem={({ item, index }) =>
                // //  console.log('flatlist data----->', item.data.message, moment(item.data.timestamp).fromNow());
                //   let msg = item.data.message;
                //   let time = moment(item.data.timestamp).fromNow();
                //   console.log('message----->', msg, time);
                //   const messageStyle = item.data.userID === auth.currentUser.uid ?
                //     { marginLeft: 'auto', backgroundColor: '#3b5998', margin: '3%', padding: '3%', borderRadius: 15 } :
                //     { marginRight: 'auto', backgroundColor: '#696969', margin: '3%', padding: '3%', borderRadius: 15 };

                <ScrollView style={{width:'100%'}}>
                  <View >

                  {
                    item.data.userID === auth.currentUser.uid ?
                      < View style={{ marginLeft:180, backgroundColor: '#2d3436',padding:'3%',margin:'3%', borderRadius: 30,paddingRight:8}}>
                        <Text style={{  color: '#fff',fontWeight:'bold' }}>{item.data.message}</Text>
                        <Text style={{ color: '#fff' }}>{moment(item.data.timestamp).fromNow()}</Text>
                      </View>
                      :
                      <View style={{ marginRight: 180, backgroundColor: '#dfe4ea', padding: '3%',margin:'3%', borderRadius: 30 ,paddingRight:8}}>
                        <Text style={{  color: 'black' ,fontWeight:'bold'}}>{item.data.message}</Text>
                        <Text style={{ color: 'black' }}>{moment(item.data.timestamp).fromNow()}</Text>
                      </View>
                  }
</View>
                </ScrollView>


              }
              keyExtractor={(item, index) => index.toString()}
            />
          }

</View>

<View style={{flexDirection:'row',marginLeft:5,marginRight:5,justifyContent:'space-around',marginTop:10}}>
<TouchableOpacity>
    <Image source={require('../../assets/emoji.png')} style={{width:20,height:20}}/>
    
    
</TouchableOpacity>
<TouchableOpacity  onPress={() => this.props.navigation.navigate('Cam')} >
    <Image source={require('../../assets/camera.png')}  style={{width:20,height:20}}/>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Cam')} >
    <Image source={require('../../assets/gallery.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
<TouchableOpacity>
    <Image source={require('../../assets/record.png')} style={{width:20,height:20}}/>
</TouchableOpacity>

<TextInput placeholder='Aa' onChangeText={(text) => this.setState({ text })} value={this.state.text} style={{width:'40%' ,borderRadius:20,backgroundColor:'#ecf0f1',padding:8,fontSize:15,height:35}}/>

<TouchableOpacity>
    <Image source={require('../../assets/thumb.png')} style={{width:20,height:20}}/>
</TouchableOpacity>

<TouchableOpacity onPress={this._sendMessage}>
    <Image source={require('../../assets/send.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
</View>
                </View>

                </KeyboardAvoidingView>
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
        // marginTop:'7%',
        // margin:"2.5%",
        // borderWidth:1,
        
         flexDirection:'column',
         justifyContent:'space-between',

         flex:1,
        
    },
    profile:{
        
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        
    }
})

