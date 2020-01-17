import firebase from 'firebase'

if (!firebase.app.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAnHGtyRQjaULwwvjUWyyhDvjeohl-DtxY',
    authDomain: 'pokemon-raid-bbs.firebaseapp.com',
    databaseURL: 'https://pokemon-raid-bbs.firebaseio.com',
    projectId: 'pokemon-raid-bbs',
    storageBucket: 'pokemon-raid-bbs.appspot.com',
    messagingSenderId: '464127888551',
    appId: '1:464127888551:web:b1ccdaaf3e41da07361f82'
  })
}
export default firebase
