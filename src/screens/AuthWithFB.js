import React, { Component } from 'react';

import * as Facebook from 'expo-facebook';
import {firebase,registerUser} from '../config/firebase'


import { View,Image,StyleSheet,Button,Text,ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AuthWithFB extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: null,
          isLoading: false
        }
        this._logInWithFacebook = this._logInWithFacebook.bind(this);
      }

    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged(user=>{
    //         if(user !== null){
    //             console.log(user)
    //         }
    //     })
    // }
    async _logInWithFacebook() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('342375853371332', { permissions: ['public_profile'], });
    
          if (type === 'success') {
            // this.setState({ isLoading: true })
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
    
            firebase.auth().signInWithCredential(credential)
        
              .then(credential => {
                let user = credential.user
                console.log('current user in auth------>', user);
                // console.log('user uid------->', user.uid);
                // console.log('user name------->', user.displayName);
                // this.setState({ user: user })
                let uid = user.uid;
                let displayName = user.displayName;
                let photoURL = user.photoURL;
                console.log('uid',uid)
                this._registerUser(uid, displayName, photoURL);
    
    
                this.props.navigation.navigate('ChatList')
              })
              .catch(err => {
                console.log(err)
              })
    
    
    
            // Get the user's name using Facebook's Graph API
            // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            //let userData = await response.json();
            //console.log('response------>',userData);
            // Alert.alert('Logged in!', `Hi ${userData.name}!`);
            // let  user=auth.currentUser
            // console.log('current user------>',user)
            // auth.onAuthStateChanged(user => {
            //   if (user != null) {
            //     console.log('user--------->', user);
            //     this.props.navigation.navigate('Bottom')
            //   }
            // })
    
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
        
      }
      async _registerUser(uid, displayName, photoURL) {
        let a = await registerUser(uid, displayName, photoURL);
        console.log(a.message)
      }
    render() {

        // const { isLoading } = this.state;

        // if (isLoading) {
        //   return <View style={styles.container}>
        //     <ActivityIndicator size='large' color="#000" />
    
        //   </View>
        // }
        // else{
        //     return(
        //         <View style={styles.container}>
                
        //                <Image source={require('../../assets/mess.png')} style={{width:150,height:150}}/>
        //              <Text>{'\n'}</Text>
        //                 <Text>{'\n'}</Text>
        
        //                  <Button
        //            title="SignIn With Facebook"
        //            onPress={this._logInWithFacebook}
                  
                  
                
        //         />
                
        //   <View style={{ margin: 3 }}></View>
        //          </View>
        //     )
        // }
        return (
            <View style={styles.container}>
                
                <Image source={require('../../assets/mess.png')} style={{width:150,height:150}}/>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>

                <Button
          title="SignIn With Facebook"
          onPress={this._logInWithFacebook}
          
          
        
        />
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

