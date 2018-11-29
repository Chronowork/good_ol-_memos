// Write your JS here
import { initialize_firebase, get_database_snapshot, get_database_path } from './firebase.js';
import { appendNote, Note } from './memos.js';

initialize_firebase();

//Listen to your database and get a snapshot at that reference
get_database_snapshot(function(snapshot) {
    let noteList = Object.values(snapshot.val());
    console.log(noteList);
    noteList.map(appendNote);

    var posts = snapshot.val();
  for (var i = 0; i < posts.length; i++) {
    let profile = posts[i].author.profilePicture;
    var img = $("<img>").attr("src", profile);

    $(".row").append(img);
    
  console.log(profile);
  }
});

$("#AddNote").click(function() {
    let author = {
        name: $("#author-input").val(),
        profilePicture: $("#profile-input").val(),
    }
    let quote = $("#quote-input").val();
    let currentDate = new Date().toDateString();
    const newNote = new Note(author, quote, currentDate, null)
    console.log(newNote);
    get_database_path().push(newNote);
})
