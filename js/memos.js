export function appendNote(note) {
    $("#memo-board").append(
        "<hr>" +
        "<div class='card-body'>" + 
        "<h5 class='card-title'>" + note.author.name + "</h5>"  +
        '<img class="profile-picture" id="profile-Image" src ="'+ note.author.profilePicture +'"></img>'+
        "<p class='card-text'>" + note.quote + "</p>" +
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