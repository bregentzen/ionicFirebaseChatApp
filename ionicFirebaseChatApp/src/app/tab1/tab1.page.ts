import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, query, orderBy } from '@angular/fire/firestore';
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

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    const messagesCollection = collection(this.firestore, 'room_0');
    const messagesQuery = query(messagesCollection, orderBy('timestamp'));
    this.messages$ = collectionData(messagesQuery, { idField: 'id' }) as Observable<Message[]>;
  }
}