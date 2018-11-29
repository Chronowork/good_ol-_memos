// Write your JS here
import { initialize_firebase, get_database_snapshot, get_database_path } from './firebase.js';
import { appendNote, Note } from './memos.js';

initialize_firebase();

//Listen to your database and get a snapshot at that reference
get_database_snapshot(function(snapshot) {
    let noteList = Object.values(snapshot.val());
    noteList.map(appendNote);
});

$("#AddNote").click(function() {
    let author = {
        name: $("#author-input").val(),
        profilePicture: $("profile-input").val(),
    }
    let quote = $("#quote-input").val();
    let currentDate = new Date().toDateString();
    const newNote = new Note(author, quote, currentDate, null)
    console.log(newNote);
    get_database_path().push(newNote);
})
