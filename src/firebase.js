import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCPVyp81A_bgqNRTnczL24N6FctB0U6MeQ',
    authDomain: 'ready4udaan.firebaseapp.com',
    projectId: 'ready4udaan',
    storageBucket: 'ready4udaan.firebasestorage.app',
    messagingSenderId: '624828358873',
    appId: '1:624828358873:web:23e60bc2bd8b2e0bb45ec8',
    measurementId: 'G-RMMYJCGM9Z'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }