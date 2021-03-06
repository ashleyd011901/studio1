//Add function to echo words here!

export function image(input){
    var database = firebase.database();
    var databaseRef = database.ref('/');
    databaseRef.once('value').then(function(snapshot) {
        const databaseValues = snapshot.val();
        // console.log(databaseValues);
        
    var kat = databaseValues[input];
    
    for (var i = 0; i < 15; i++) {
      var myImage = new Image(450.1 - i*30);
      myImage.src = kat;   
      console.log(myImage);
      $('#pictures').append(myImage);
      
    }
});
}

export function initialize_firebase() {
    firebase.initializeApp(get_firebase_config());
  }
  
  function get_firebase_config() {
    return {
      apiKey: "AIzaSyB75jhm6myRyhTmwA3TUUBcEyBgU7vJOO8",
      authDomain: "entertainmentsite-24e57.firebaseapp.com",
      databaseURL: "https://entertainmentsite-24e57.firebaseio.com/",
      projectId: "entertainmentsite-24e57",
      storageBucket: "entertainmentsite-24e57.appspot.com",
      messagingSenderId: "400452770690"
    };
  }
  
  function get_database_path() {
    return "/";
  }
  
  export function get_database_snapshot(callback) {
    // TODO: Read from the Firebase database at path '/directory' or
    //       get_database_path() and call 'callback' with the snapshot.
    //
    // NOTE: This is the same as the DO NOW
    var database = firebase.database();
    var databaseRef = database.ref("/");
    
    databaseRef.once("value").then(function(snapshot) {
      callback(snapshot);
    });
  }