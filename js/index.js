// Write your JS here
import { initialize_firebase, get_database_snapshot, get_database_path } from './firebase.js';
import { appendNote, Note } from './memos.js';

initialize_firebase();

//Listen to your database and get a snapshot at that reference
get_database_snapshot(function(snapshot) {
    let noteList = Object.values(snapshot.val());
    console.log(noteList);
    noteList.map(appendNote);    
});

$("#AddNote").click(function() {
    let picture = $("#profile-input").val();
    if (picture === undefined || picture === "") {
        picture = "https://www.dentsinc.co.uk/wp-content/uploads/2015/11/photo-placeholder-square.png";
    }
    let author = {
        name: $("#author-input").val(),
        profilePicture: picture,
    }
    if (author.name === undefined || author.name === "") {
        author.name = "Anonymous"
    }
    let quote = $("#quote-input").val();
    let currentDate = new Date().toDateString();
    const newNote = new Note(author, quote, currentDate, null)
    get_database_path().push(newNote);
    location.reload();
})
