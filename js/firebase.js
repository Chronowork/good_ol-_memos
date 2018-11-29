export function initialize_firebase() {
  firebase.initializeApp(get_firebase_config());
}
function get_firebase_config() {
  return {
    apiKey: "AIzaSyDMH_wXIWwjt17VOBlxK04yaZmVBfpeihA",
    authDomain: "good-ol-memos.firebaseapp.com",
    databaseURL: "https://good-ol-memos.firebaseio.com",
    projectId: "good-ol-memos",
    storageBucket: "good-ol-memos.appspot.com",
    messagingSenderId: "228309781176"
  };
}

export function get_database_snapshot(callback) {
  // TODO: Read the firebase database at the path: '/posts' or get_database_path()
  //
  // Use the given 'callback' function for the database snapshot, e.g.
  //   ref.once('value', callback)
  let databaseRef = firebase.database().ref('/memos');
  databaseRef.once('value', callback);
}

export function get_database_path() {
  return firebase.database().ref('/memos');
}
