var firebaseConfig = {
      apiKey: "AIzaSyAREI2qKos-lrrZwiSUzAncpbS6CNZVJjs",
      authDomain: "kwitter-ce60b.firebaseapp.com",
      databaseURL: "https://kwitter-ce60b-default-rtdb.firebaseio.com",
      projectId: "kwitter-ce60b",
      storageBucket: "kwitter-ce60b.appspot.com",
      messagingSenderId: "620769373370",
      appId: "1:620769373370:web:525a0513dd24145b55a683"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");

function send(){

      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name : user_name,
            message : message,
            likes : 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
