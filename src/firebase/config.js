import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCet1FS1nphsDHED7uvKLq60YlWhBigihA',
  authDomain: 'cloudsketch-21.firebaseapp.com',
  projectId: 'cloudsketch-21',
  storageBucket: 'cloudsketch-21.appspot.com',
  messagingSenderId: '597183699109',
  appId: '1:597183699109:web:9d9d6f54b8b81cd969954c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// Get timestamp when uploading
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
export { projectFirestore, projectStorage, timeStamp };
