// Write your JS here
import { initialize_firebase, get_database_snapshot } from './firebase.js';
import { appendNote, Note } from './memos.js';

initialize_firebase();

//Listen to your database and get a snapshot at that reference
get_database_snapshot(function(snapshot) {
    let noteList = Object.values(snapshot.val());
    noteList.map(appendNote);
});

$("#AddNote").click(function() {

})
