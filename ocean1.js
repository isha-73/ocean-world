
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
// const submit = document.getElementById('button');

function sendEmail(){
const ebody=`Name: ${name1.value}
  <br>
   Email : ${email.value}
   <br>
   Message: ${message.value}`;
Email.send({
Host : "smtp.elasticemail.com",
Username : "ishabule753@gmail.com",
Password : "40EDCB6AF318E4E866C60690250596573E97",
To : email.value,
From : 'ishabule753@gmail.com',
Subject : "We loved Your Response",
Body : "We are proud that you want to join us , tell us when you can come to our next ocean drive?"
}).then(
message => alert(message)
);
console.log(ebody)
}
