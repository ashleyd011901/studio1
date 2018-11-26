export function newimage(input){
  var database = firebase.database();
  var databaseRef = database.ref('/');
  databaseRef.once('value').then(function(snapshot) {
      const databaseValues = snapshot.val();
      // Figure out how to put a thing in firebase here!

  var kat = databaseValues[input];
  
  for (var i = 0; i < 10; i++) {
    var myImage = new Image(200 - i*30);
    myImage.src = kat;   
    console.log(myImage);
    $('#pictures').append(myImage);
    
  }
});
}
