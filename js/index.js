// Write your JS here
 import {image} from './script3.js';
 import {newimage} from './script2.js';
// console.log(echo);
/* var database = firebase.database();
var databaseRef = database.ref('/');

databaseRef.once('value').then(function(snapshot) {
  const databaseValues = snapshot.val();
  console.log(databaseValues); */
  
  //echo();
// });

$("#cat").click(function(){
  $('#pictures').empty();
  image("Cat");      

  
});
$("#dog").click(function(){
  $('#pictures').empty();
  image("Dog");      

  
});
$("#gym").click(function(){
  $('#pictures').empty();
  image("Jungle Gym");      

  
});
$("#dio").click(function(){
  $('#pictures').empty();
  image("wry");      

  
});
$("#oof").click(function(){
  $('#pictures').empty();
  newimage("image1");      

  
});