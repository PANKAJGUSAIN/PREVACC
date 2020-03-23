// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB193C8OxUXBT30_IhWfddKFLQk30-v_Ug",
    authDomain: "expense-tracker-f3aca.firebaseapp.com",
    databaseURL: "https://expense-tracker-f3aca.firebaseio.com",
    projectId: "expense-tracker-f3aca",
    storageBucket: "expense-tracker-f3aca.appspot.com",
    messagingSenderId: "673251831801",
    appId: "1:673251831801:web:00fcd86e57f89312b25728"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //messages
  var messagesRef = firebase.database().ref('messages')
//listen for submit
document.getElementById("cotactform").addEventListener('submit',submitForm);

function submitform(e)
{
    e.preventDefault();

    var name =getInputval('First Name');
    var name =getInputval('Last Name');
    var name =getInputval('Email');
    var name =getInputval('Password');
    var name =getInputval('confirm Password');
    var name =getInputval('gender');
    var name =getInputval('phone numeber');
    var name =getInputval('emergency number');

    saveMessage(First Name,Last Name,Email,Password,confirm Password,gender,phone numeber,emergency number)
}

function getInputval(id){
    return document.getInputById(id).value;
}

//save messages
function saveMessage(First Name,Last Name,Email,Password,confirm Password,gender,phone numeber,emergency number){
    var mewMessageResf = messageRaf,push();
    newMessageRef =messageRaf.push();
    First Name:First Name,
    Last Name:Last Name,
    Email :email,
    Password: password,
    confirm Password:confirm,
    gender:gender,
    phone numeber:phone number,
    emergency number:emergency number
    })
}