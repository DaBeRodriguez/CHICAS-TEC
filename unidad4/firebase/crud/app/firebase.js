// export function hola(){
//     console.log('hola este mensaje es desde el archivo de firebase.js')
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getFirestore, addDoc, getDocs , collection} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWGxHRea0khmyyOXNpINA047Cr44QscTM",
    authDomain: "proyecto1-1ba20.firebaseapp.com",
    projectId: "proyecto1-1ba20",
    storageBucket: "proyecto1-1ba20.appspot.com",
    messagingSenderId: "380869136652",
    appId: "1:380869136652:web:8dda41af7db6b9f7333929",
    measurementId: "G-W6XRZ6M6HJ"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db =getFirestore(app);
export const GuardarTarea = (titulo, descripcion) => {
    addDoc (collection (db, "tareas"), {
        _titulo : titulo,
        _descripcion : descripcion ,
    })
    console.log ( "se agrego la tarea exitosamente ")
};
export function ListarTareas() {
    // console.log("hoola");
    getDocs(collection (db,"tareas")) //getDocs (collection)
    forEach((doc) => {
        console.log (doc);
        
    });
}
// const ListarTareas = () => 
// 