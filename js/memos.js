function appendNote(note) {
    $("#memo-board").append(
        "<hr>" +
        "<div class='card-body'>" + 
        "<h5 class='card-title'>" + note.author.name + "</h5>" +
        "<p class='card-text'>" + note.quote + "</p>" +
        "<p class='card-date text-muted'>" + note.date + "</p>" +
        "</div>"
    ); 
}

function appendAllNotes(noteList) {
    for(let i = 0; i < noteList.length; i++) {
        appendNote(noteList[i]);
    }
}

export { appendAllNotes };