export function newimage(input){
  var database = firebase.database();
  var databaseRef = database.ref('/');
  var userinput = $("#userInput").val();
  var userInputRef = database.ref('/Upload1');
  userInputRef.set(userinput);
  databaseRef.once('value').then(function(snapshot) {
      const databaseValues = snapshot.val();
      // Figure out how to put a thing in firebase here!
      var kat = $("#userInput").val();
      console.log(kat)

  // var kat = 
  // databaseValues[input];
  
  for (var i = 0; i < 15; i++) {
    var myImage = new Image(450.1 - i*30);
    myImage.src = kat;   
    console.log(myImage);
    $('#pictures').append(myImage);
    
  }
});
}
