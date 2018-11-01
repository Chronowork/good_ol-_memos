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

function pushNoteToDatabase(name, nickname, quote, databaseRef) {
    let note = {
        author: {
            name: name,
            nickname: nickname
        },
        quote: quote,
        date: "11-04-2901"
    }
    console.log(note);
    databaseRef.push(
        note
    )
}

export { appendAllNotes, pushNoteToDatabase };