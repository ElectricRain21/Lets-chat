const firebaseConfig = {
  apiKey: "AIzaSyBke-2VcK-GyXqfSpaDfc7dpZZiJa8siJY",
  authDomain: "message-20201.firebaseapp.com",
  databaseURL: "https://message-20201-default-rtdb.firebaseio.com",
  projectId: "message-20201",
  storageBucket: "message-20201.appspot.com",
  messagingSenderId: "310981981825",
  appId: "1:310981981825:web:a6b41fe25dc4ea9501ff80"
};

const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
