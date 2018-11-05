// Write your JS here
import test from './script2.js';
console.log('test');
var database = firebase.database();
var databaseRef = database.ref('/');

databaseRef.once('value').then(function(snapshot) {
  const databaseValues = snapshot.val();
  console.log(databaseValues);
  $('body').append(databaseValues['Cat']);
  var Cat = databaseValues['Cat'];

  var myImage = new Image(200);
  myImage.src = Cat;
  $('body').append(myImage);
});



test();
