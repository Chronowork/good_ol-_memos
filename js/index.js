// Write your JS here
import test from './script2.js';

console.log('test');

test();

// Create your reference to your data. In this case we are rerencing the entire database at '/'
var databaseRef = firebase.database().ref('/');

//Listen to your database and get a snapshot at that reference
databaseRef.once('value').then(function(snapshot) {
    //Get the values from the snapshot of the data
    const databaseValues = snapshot.val();
    //Log all the data to the console
    console.log(databaseValues.memos[0]);

    const memos = databaseValues.memos

    console.log(typeof(memos[0].author))

    appendNote(memos[0]);

    function appendNote(note) {
        console.log(note.author);
        $("#memo-board").append(
           "<div class='card-body'>" + 
           "<h5 class='card-title'>" + note.author + "</h5>" +
           "<p class='card-text'>" + note.quote + "</p>" +
           "<p>" + note.date + "</p>" +
           "</div>"
        );
        
    }
});

