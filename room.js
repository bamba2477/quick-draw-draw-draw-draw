var firebaseConfig = {
    apiKey: "AIzaSyDNyWff9Bnv-nKf5WsWLokKVkbVfnwKXqk",
    authDomain: "twitter-ab0e3.firebaseapp.com",
    projectId: "twitter-ab0e3",
    storageBucket: "twitter-ab0e3.appspot.com",
    messagingSenderId: "951956927078",
    appId: "1:951956927078:web:902213af92153d9be473a7"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
