import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC98HgfIH_lAPcMfL4UWP0ZiMZOn0zzwcQ",
  authDomain: "base-web-page-test-database.firebaseapp.com",
  projectId: "base-web-page-test-database",
  storageBucket: "base-web-page-test-database.appspot.com",
  messagingSenderId: "347391860634",
  appId: "1:347391860634:web:f66e7bf2f85447d7252423",
  measurementId: "G-BL5MDCJ5CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
