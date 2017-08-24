// Initialize Firebase
var config = {
    apiKey: "AIzaSyBsDUxWCpLLAwB-ubkZ38scPdDCz-SSIjM",
    authDomain: "project1-4c28b.firebaseapp.com",
    databaseURL: "https://project1-4c28b.firebaseio.com",
    projectId: "project1-4c28b",
    storageBucket: "project1-4c28b.appspot.com",
    messagingSenderId: "281396976982"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().on('value', function(snap) {
      console.log(snap.val());
  })


  //creates child each time
  database.ref().on('child_added', function(snap){
      addRow(snap.val().name, snap.val().destination, snap.val().firstTrain, snap.val().freq)
  });

  //
  function addRow(name, destination, firstTrain, freq) {
      var diff = moment().diff(moment(firstTrain, "HH:mm"), "minutes");
      var minsAway = (diff%freq)

      var nextTrain = moment().add(minsAway, "minutes");

      var newRow = $("<tr>").append( $("<td>").text(name))
                            .append( $("<td>").text(destination))
                            .append( $("<td>").text(freq))
                            .append( $("<td>").text(nextTrain.format("HH:mm")))
                            .append( $("<td>").text(minsAway))

    $("tbody".append(newRow) )

    //pushes inputs from form to database
    database.ref().push({
        "TrainName": name,
        "Destination": destination,
        "FirstTrain": firstTrain,
        "Frequency": freq,

        
    })
    // console.log(name);
    // console.log(destination);
    // console.log(firstTrain);
    // console.log(freq);
    
  };

