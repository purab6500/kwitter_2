
var firebaseConfig = {
    apiKey: "AIzaSyAQ_4XmmwIKoFsuiMrQrfj_5Hg-E4KB-_o",
    authDomain: "kwitter-81937.firebaseapp.com",
    databaseURL: "https://kwitter-81937-default-rtdb.firebaseio.com",
    projectId: "kwitter-81937",
    storageBucket: "kwitter-81937.appspot.com",
    messagingSenderId: "414502224131",
    appId: "1:414502224131:web:f55e524fd2726dc6566936"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addusername(){
    var inputname=document.getElementById("Name").value;
    firebase.database().ref("/").child(inputname).update({
        purpose:"addinguser"
    })
    
}