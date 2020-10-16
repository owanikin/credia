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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  

  var db = firebase.firestore();

  firebase.database().ref('register');
  
  // Listen for submit event
  document.getElementById('email').addEventListener('submit', formSubmit);

  //Submit form
  function formSubmit(e) {
    e.preventDefault();
    //Get DOM Values
    let email = document.querySelector('#email').value;
    //Send message values
    sendMessage(email);
    document.querySelector('#email').value="";
  }


  //Form Reset After Submission
 
  //document.getElementById('#chimp-email-address').reset();

  function sendMessage(email){
      db.collection('register').add({
          email: email
      }).then(function(){
          emailjs.sendForm('gmail', 'template_fOXiEoBq', this);
      })
  }