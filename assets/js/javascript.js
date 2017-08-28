// alert("javascriptjs");

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

//   database.ref().on('value', function(snap) {
//       console.log(snap.val());
//   })

//   $("#add-btn").on("click", function(event) {
//     event.preventDefault();

//   //creates child each time
//   database.ref().on('child_added', function(snap){
//       addRow(snap.val().name, snap.val().destination, snap.val().firstTrain, snap.val().freq)
//   });

//   //
//   function addRow(name, destination, firstTrain, freq) {
//       var diff = moment().diff(moment(firstTrain, "HH:mm"), "minutes");
//       var minsAway = (diff%freq)

//       var nextTrain = moment().add(minsAway, "minutes");

//       var newRow = $("<tr>").append( $("<td>").text(name))
//                             .append( $("<td>").text(destination))
//                             .append( $("<td>").text(freq))
//                             .append( $("<td>").text(nextTrain.format("HH:mm")))
//                             .append( $("<td>").text(minsAway))

//     $("tbody".append(newRow) )

//     //pushes inputs from form to database
//     database.ref().push({
//         "TrainName": name,
//         "Destination": destination,
//         "FirstTrain": firstTrain,
//         "Frequency": freq,

        
//     })

    
//   };

//   });

// 2. Button for adding Employees
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var tname = $("#name").val().trim();
    var tdestination = $("#destination").val().trim();
    var tfirstTrain = $("#firstTrain").val().trim();
    var tfreq = $("#freq").val();
    // var tminsaway = moment($("#minsAway").val().trim(), "HH:mm").format("X");
  console.log(tname);


    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: tname,
      destination: tdestination,
      firstTrain: tfirstTrain,
      freq: tfreq
    
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.freq);
    
  
    // Alert
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#name").val("");
    $("#destination").val("");
    $("#firstTrain").val("");
    $("#freq").val("");
    
  
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var tname = childSnapshot.val().name;
    var tdestination = childSnapshot.val().destination;
    var tfreq = childSnapshot.val().freq;
    var tfirstTrain = childSnapshot.val().firstTrain;
  
    // Employee Info
    console.log(tname);
    console.log(tdestination);
    console.log(tfreq);
    console.log(tfirstTrain);
  
    // Prettify the employee start
    // var empStartPretty = moment.unix(tfreq).format("MM/DD/YY");
  
    // Calculate the months worked using hardcore math
    // get info from the database.
    var nextTrain = moment().diff(moment.unix(firstTrain, "X"), "minutes");
    console.log(nextTrain);

    var now = moment();
    console.log(now);
  
    // Calculate the total billed rate
    var minsaway = ((nextTrain - firstTrain) / freq) % freq;
    console.log(minsaway);

  $("#train-table > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" +
  freq + "</td><td>" + nextTrain + "</td><td>" + minsaway + "</td><td>");
});