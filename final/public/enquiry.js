

// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDob-ZUgfwfJ-vkXedLFe5t2jFyVFu5b04",
  authDomain: "blacksmith-3a2b0.firebaseapp.com",
  databaseURL: "https://blacksmith-3a2b0.firebaseio.com",
  projectId: "blacksmith-3a2b0",
  storageBucket: "blacksmith-3a2b0.appspot.com",
  messagingSenderId: "126834278470",
};
firebase.initializeApp(config);

// Reference messages collection 
//var messagesRef = firebase.database().ref('enquiry');



// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var pen = getInputVal('pen');
  var country = getInputVal('country');
  var city = getInputVal('city');
  var purpose = getInputVal('purpose');

  // Save message
  saveMessage(name, company, email, phone, message, pen, country, city, purpose);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message, pen, country, city, purpose) {
  //  var newMessageRef = messagesRef.push();
  //  
  // 
  //    
  //  newMessageRef.set({
  //    name: name,
  //    company:company,
  //    email:email,
  //    phone:phone,
  //    message:message,
  //      pen:pen,
  //      country:country,
  //      city: city,
  //      purpose:purpose
  //  });








  //    var data ={
  //         name: name,
  //    company:company,
  //    email:email,
  //    phone:phone,
  //    message:message,
  //      pen:pen,
  //      country:country,
  //      city: city,
  //      purpose:purpose
  //    }
  //    
  //      
  //     messagesRef .push(data)






  userID = phone

  var data = {
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
    pen: pen,
    country: country,
    city: city,
    purpose: purpose
  }
  var firebaseRef = firebase.database().ref("enquiry/" + userID)
  firebaseRef.set(data)

}

































