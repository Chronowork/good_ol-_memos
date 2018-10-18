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

function appendAllNotes(noteList) {
    for(let i = 0; i < noteList.length; i++) {
        appendNote(noteList[i]);
    }
}

export { appendAllNotes };