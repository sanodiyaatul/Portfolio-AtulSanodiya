const firebaseConfig = {
  apiKey: "AIzaSyAovDWGf1d-PfEmBTHXy264_kq53QvH0D4",
  authDomain: "portfolio-99030.firebaseapp.com",
  databaseURL: "https://portfolio-99030-default-rtdb.firebaseio.com",
  projectId: "portfolio-99030",
  storageBucket: "portfolio-99030.appspot.com",
  messagingSenderId: "1017138658637",
  appId: "1:1017138658637:web:cee8bcaafa519058630b04",
  measurementId: "G-3Y38M11DYF"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactform");

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var number = getElementVal("number");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, number, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactform").reset();
}

const saveMessages = (name, number, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    number: number,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


const copyright = document.querySelector(".footer");
copyright.innerHTML = "Copyright &copy " + new Date().getFullYear() + " Atul Sanodiya | All Rights Reserved.";