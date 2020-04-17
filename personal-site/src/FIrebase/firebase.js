import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDduBgpdJJ3xs1YMGncfp9_ZP7YzNEYCSg",
    authDomain: "personal-site-90ec6.firebaseapp.com",
    databaseURL: "https://personal-site-90ec6.firebaseio.com",
    projectId: "personal-site-90ec6",
    storageBucket: "personal-site-90ec6.appspot.com",
    messagingSenderId: "69938907518",
    appId: "1:69938907518:web:29f03487ecc5d959128b2f"
  }

  class firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }

  export default firebase