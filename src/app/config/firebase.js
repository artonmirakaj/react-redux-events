import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrPPa_nXJY6TvGAhq_8vMdts6Vw76erS0',
  authDomain: 'revents-22182.firebaseapp.com',
  databaseURL: 'https://revents-22182.firebaseio.com',
  projectId: 'revents-22182',
  storageBucket: 'revents-22182.appspot.com',
  messagingSenderId: '627116486871'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
