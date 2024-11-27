import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, query, orderBy, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Message {
  author: string;
  text: string;
  timestamp: any;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  messages$: Observable<Message[]> = new Observable<Message[]>();
  newMessage: string = '';
  author: string = '';

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    try {
      this.author = localStorage.getItem('username') || 'Anonym';
      const messagesCollection = collection(this.firestore, 'room_1');
      const messagesQuery = query(messagesCollection, orderBy('timestamp', 'desc'));
      this.messages$ = collectionData(messagesQuery, { idField: 'id' }) as Observable<Message[]>;
      console.log('Firestore Query erfolgreich initialisiert.');
    } catch (error) {
      console.error('Error beim Initialisieren der Query', error);
    }
  }

  ionViewWillEnter() {
    this.author = localStorage.getItem('username') || 'Anonym';
  }

  async sendMessage() {
    if (this.newMessage.trim().length === 0) return;

    const messagesCollection = collection(this.firestore, 'room_1');
    console.log('sendMessage', this.newMessage);

    await addDoc(messagesCollection, {
      author: this.author,
      text: this.newMessage,
      timestamp: serverTimestamp()
    });

    console.log('Nachricht erfolgreich gesendet');

    this.newMessage = '';
  }
}