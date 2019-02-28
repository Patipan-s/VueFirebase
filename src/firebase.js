import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDjBCX8Ceu97dvS73_KTM23dkdQpf-DTpM",
    authDomain: "crud-a9ebf.firebaseapp.com",
    databaseURL: "https://crud-a9ebf.firebaseio.com",
    projectId: "crud-a9ebf",
    storageBucket: "crud-a9ebf.appspot.com",
    messagingSenderId: "788232005292"
})

export const db = app.database();   
export const namesRef = db.ref('names');    //create table in database

/** Firebase Name : crud */