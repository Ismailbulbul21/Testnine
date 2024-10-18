
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-CBG_VwY5-RoX00ZcWOrSuEVm0HYh1Dw",
  authDomain: "madow-cadaan.firebaseapp.com",
  projectId: "madow-cadaan",
  storageBucket: "madow-cadaan.appspot.com",
  messagingSenderId: "878338242265",
  appId: "1:878338242265:web:973510562c3b8353b3f0c8"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };