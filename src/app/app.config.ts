import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simulacro-pp-progra',
        appId: '1:195677561874:web:c83c98c46f9636870264cb',
        storageBucket: 'simulacro-pp-progra.appspot.com',
        apiKey: 'AIzaSyCffSEXfnneQMgo76rhldZeZ2UpC0eYNQU',
        authDomain: 'simulacro-pp-progra.firebaseapp.com',
        messagingSenderId: '195677561874',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(withFetch()),
    { provide: FIREBASE_OPTIONS, useValue: {
        projectId: 'simulacro-pp-progra',
        appId: '1:195677561874:web:c83c98c46f9636870264cb',
        storageBucket: 'simulacro-pp-progra.appspot.com',
        apiKey: 'AIzaSyCffSEXfnneQMgo76rhldZeZ2UpC0eYNQU',
        authDomain: 'simulacro-pp-progra.firebaseapp.com',
        messagingSenderId: '195677561874',
    } },
  ],
};
