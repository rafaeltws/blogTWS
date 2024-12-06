import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_LQG6NCAnhCbh_0NUaF3uV7C86H8VA_c",
  authDomain: "miniblog-80af3.firebaseapp.com",
  projectId: "miniblog-80af3",
  storageBucket: "miniblog-80af3.firebasestorage.app",
  messagingSenderId: "226852213144",
  appId: "1:226852213144:web:88bd52aa2ae7c9d4c55bed"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };