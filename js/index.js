// Write your JS here
import { initialize_firebase, get_database_snapshot } from './firebase.js';
import { appendNote } from './memos.js';

initialize_firebase();

//Listen to your database and get a snapshot at that reference
get_database_snapshot(function(snapshot) {
    let noteList = snapshot.val();
    for(let i = 0; i < noteList.length; i++) {
        appendNote(noteList[i]);
    }
});

$("#AddNote").click(function() {
    let obj = {
        author: {
            name: $("#author-input").val()
        },
        quote: $("#quote-input").val(),
        date:  new Date().toJSON().slice(0,10)
    }
    console.log(obj);
})
