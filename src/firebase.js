import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyBaGDd1T1i_clmx_ikXCCpweWM_HC5W02M",
    authDomain: "unichat-test-ecc94.firebaseapp.com",
    projectId: "unichat-test-ecc94",
    storageBucket: "unichat-test-ecc94.appspot.com",
    messagingSenderId: "530616587173",
    appId: "1:530616587173:web:9a34c495511ecf16018e4c",
    measurementId: "G-W0PMRT1YSZ"
  }).auth();