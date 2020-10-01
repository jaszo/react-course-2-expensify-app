import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 175000,
// //   createdAt: 13144523341
// // });

// // database.ref('notes/-MIYSllSHpqbs6TKt-Lj').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // Setup data subscription -> Jassiel is a Software Developer at Amazon.
// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // Change the data and make sure it reprints
// // database.ref().update(() => {
// //   name: 'Alejandro',
// //   'job/title': 'Software Developer',
// //   'job/company': 'Amazon'
// // }).then(() => {
// //   console.log()
// // });

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Jassiel Chavez',
// //   age: 34,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   isSingle: false,
// //   location: {
// //     city: 'San Antonio',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e)
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(function() {
// //     console.log("Data was removed.");
// //   }).catch(function(e) {
// //     console.log("Did not remove data", e);
// //   });