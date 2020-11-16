// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCltupZbjwfQitxjRoz6lor1UvKK_Kg-cI",
  authDomain: "my-brand-316ad.firebaseapp.com",
  databaseURL: "https://my-brand-316ad.firebaseio.com",
  projectId: "my-brand-316ad",
  storageBucket: "my-brand-316ad.appspot.com",
  messagingSenderId: "288845810196",
  appId: "1:288845810196:web:a6b8107fd92845a98d3501",
  measurementId: "G-78WE3VGRWE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
// update firestore settings
db.settings({ timestampsInSnapshots: true });
