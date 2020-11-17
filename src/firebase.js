import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsdg9ldXrZIl5XTS5K3TKqg2WDSjtkH4E",
    authDomain: "photo-edit-contest.firebaseapp.com",
    databaseURL: "https://photo-edit-contest.firebaseio.com",
    projectId: "photo-edit-contest",
    storageBucket: "photo-edit-contest.appspot.com",
    messagingSenderId: "20342140557",
    appId: "1:20342140557:web:5abd04dab3bebe778cfcc4",
    measurementId: "G-Z08DYE58Q2"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;