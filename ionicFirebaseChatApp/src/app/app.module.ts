import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"dabregen-nisaenko-chatapp","appId":"1:1042684851315:web:b850fd0b01437317e7e606","storageBucket":"dabregen-nisaenko-chatapp.firebasestorage.app","apiKey":"AIzaSyAeJHjtJmhc1epTdL7MqekJAUIOEo2YaHM","authDomain":"dabregen-nisaenko-chatapp.firebaseapp.com","messagingSenderId":"1042684851315","measurementId":"G-RQNEGD6VLL"})), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
