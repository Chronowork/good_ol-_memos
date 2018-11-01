// Write your JS here
import test from './script2.js';
import { appendAllNotes, pushNoteToDatabase } from './memos.js';

console.log('test');

test();

// Create your reference to your data. In this case we are rerencing the entire database at '/'
var databaseRef = firebase.database().ref('/memos');

//Listen to your database and get a snapshot at that reference
databaseRef.once('value').then(function(snapshot) {
    //Get the values from the snapshot of the data
    const memos = snapshot.val();

    console.log(memos);

    appendAllNotes(memos);
});

$("#AddNote").click(function() {
    pushNoteToDatabase("1", "2", "3", databaseRef);
});
