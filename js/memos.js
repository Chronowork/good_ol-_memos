export function appendNote(note) {
    let profile = note.author.profilePicture;
    var img = $("<img>").attr("src", profile);
    $("#memo-board").append(
        "<hr>" +
        "<div class='card-body'>" + 
        "<h5 class='card-title'>" + note.author.name + "</h5>"  +
        "<p class='card-text'>" + note.quote + "</p>" +
        '<img src ="'+ profile +'"></img>'+
        "<p class='card-date text-muted'>" + note.date + "</p>" +
        "</div>"
    ); 
}

export class Note {
    constructor(author, quote, date, profilePicture) {
        this.author = author,
        this.quote = quote,
        this.date = date,
        this.profilePicture = profilePicture
    }
}