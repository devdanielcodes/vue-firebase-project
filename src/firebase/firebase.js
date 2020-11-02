import firebase from 'firebase'

import 'firebase/firestore'

import config from './firebase.config'

const app = firebase.initializeApp(config)

export default app.firestore()
