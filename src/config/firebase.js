import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBawCXwCjYZ4BIpZig8V5VFxmfIrQYle-g",
    authDomain: "rnchatapp-ebc79.firebaseapp.com",
    databaseURL: "https://rnchatapp-ebc79.firebaseio.com",
    projectId: "rnchatapp-ebc79",
    storageBucket: "",
    messagingSenderId: "682261583557",
    appId: "1:682261583557:web:fbad7922707cdf11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  const db = firebase.firestore()

  const storage = firebase.storage(); 

  


function registerUser(uid, displayName, photoURL) {
    return new Promise((resolve, promises) => {
        console.log('helooo',displayName)
        db.collection('users').doc(uid).set({ uid: uid, displayName: displayName, photoURL: photoURL, createdAt: Date.now() })
        
            .then(res => {
                resolve({ message: 'User registered successfully!' })
                console.log('User successfully registered!')
            })
            .catch(err => {
                reject(new Error(err.message))
                console.log(err)
            })
    })
}

function getAllUsers() {
    return new Promise((resolve, reject) => {
        console.log('resl',resolve)
        db.collection('users').get().then(snap => {
            const users = [];
            console.log(users)
            snap.forEach(elem => {
                users.push({ uid: elem.data().uid, displayName: elem.data().displayName, photoURL: elem.data().photoURL })
                // if (auth.currentUser.uid !== elem.data().uid) {
                //     users.push({ uid: elem.data().uid, displayName: elem.data().displayName, photoURL: elem.data().photoURL })
                // }
                 resolve(users)
            })
        })
    })
}

function createChatRoom(item) {
    const userID = auth.currentUser.uid;
    const friendID = item.uid;
    let chatExists = false;
    // console.log('friendID----->',friendID)
    // console.log('userID------->',userID)

    return new Promise((resolve, reject) => {

        db.collection('chatrooms')
            .where('users.' + userID, '==', true)
            .where('users.' + friendID, '==', true)
            .get().then(snapshot => {
                snapshot.forEach(elem => {
                    chatExists = { data: elem.data(), chatroomID: elem.id }
                })

                if (!chatExists) {
                    const obj = {
                        createdAt: Date.now(),
                        users: {
                            [userID]: true,
                            [friendID]: true,
                        }
                    }
                    db.collection('chatrooms').add(obj).then(snapshot => {
                        resolve({ data: obj, chatroomID: snapshot.id })
                    })
                } else {
                    resolve(chatExists)
                }

            })


    })

}

function sendMessagesToDB(chatroomID, message) {
    //  console.log('chatroomID--------->',chatroomID)
    //  console.log('text--------------->',text)
    const obj = {
        message,
        userID: auth.currentUser.uid,
        timestamp: Date.now(),
    }
    return db.collection('chatrooms').doc(chatroomID).collection('messages').add(obj)
}


export {
    firebase,
    auth,
    db,
    storage,
    registerUser,
getAllUsers,
createChatRoom,
sendMessagesToDB
}