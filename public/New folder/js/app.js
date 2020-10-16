
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBT0GDzgouQ8LnPOsaJeDmXhyPATOreV4k",
    authDomain: "consol-landingpage.firebaseapp.com",
    databaseURL: "https://consol-landingpage.firebaseio.com",
    projectId: "consol-landingpage",
    storageBucket: "consol-landingpage.appspot.com",
    messagingSenderId: "267667415951",
    appId: "1:267667415951:web:fd5ddfb30a5682e4b2e1fa",
    measurementId: "G-48XX7X29KF"
  };

  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  // Reference for form submission
  // firebase.database().ref();  
  // let formMessage = firebase.database().ref('register')

//listen for submit event//
document.getElementById('wrapped').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  // let gender = document.querySelector('.gender').value;
  let companyname = document.querySelector('#companyname').value;
  // let businessregistration = document.querySelector('#businessregistration').value;
  let typeofregistration = document.querySelector('#typeofregistration').value;
  let natureofbusiness = document.querySelector('#natureofbusiness').value;
  let yearsinoperation = document.querySelector('#yearsinoperation').value;
  let corporate = document.querySelector('#corporate').value;
  let transacting = document.querySelector('#transacting').value;
  let howlong = document.querySelector('#howlong').value;
  let kindoffinance = document.querySelector('#kindoffinance').value;
  let usedfor = document.querySelector('#usedfor').value;


  //Send message values
  sendMessage(name, email, phone, companyname, typeofregistration, natureofbusiness, yearsinoperation, corporate, transacting, howlong, kindoffinance, usedfor);

  // //Show Alert Message(5)
  // document.querySelector('.alert').style.display = 'block';

  // //Hide Alert Message After Seven Seconds(6)
  // setTimeout(function() {
  //   document.querySelector('.alert').style.display = 'none';
  // }, 7000);

  swal("Successfully completed your business assessment!", "", "success");


  //Form Reset After Submission(7)
  document.getElementById('wrapped').reset();
  window.location.replace("https://getcredia.com/");
}

function sendMessage(name, email, phone, companyname, typeofregistration, natureofbusiness, yearsinoperation, corporate, transacting, howlong, kindoffinance, usedfor) {
  db.collection("register").add({
    name: name,
    email: email,
    phone: phone,
    // gender: gender,
    companyname: companyname,
    // businessregistration: businessregistration,
    typeofregistration: typeofregistration,
    natureofbusiness: natureofbusiness,
    yearsinoperation: yearsinoperation,
    corporate: corporate,
    transacting: transacting,
    howlong: howlong,
    kindoffinance:  kindoffinance,
    usedfor: usedfor
  }).then(function(){
    emailjs.sendForm('gmail', 'template_fOXiEoBq', this);
  })
}

