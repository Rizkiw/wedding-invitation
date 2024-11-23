// src/firestoreService.js
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from './firebase';

// Add a new greeting to Firestore
export const addGreeting = async (name, message) => {
    try {
        console.log('Form submitted with:', { name, message });
        const docRef = await addDoc(collection(db, 'greetings'), { name, message });
        return docRef.id;
    } catch (error) {
        console.error('Error adding greeting: ', error);
        throw error;
    }
};

// Fetch all greetings from Firestore
export const fetchGreetings = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'greetings'));
        return querySnapshot.docs.map((doc) => doc.data());
    } catch (error) {
        console.error('Error fetching greetings: ', error);
        throw error;
    }
};
