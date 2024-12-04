import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  username: string = '';
  usernameError: string | null = null;
  existingUsernames$: Observable<string[]> = new Observable<string[]>();

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    const messagesCollection = collection(this.firestore, 'room_1');
    this.existingUsernames$ = collectionData(messagesCollection).pipe(
      map((messages: any[]) => messages.map(msg => msg.author))
    );
  }

  saveUsername() {
    this.existingUsernames$.pipe(take(1)).subscribe(usernames => {
      if (usernames.includes(this.username)) {
        this.usernameError = 'Dieser Nutzername ist bereits vergeben. Bitte wähle einen anderen.';
        console.log('Nutzername bereits vergeben');

      } else {
        console.log('Nutzername noch nicht vergeben');

        localStorage.setItem('username', this.username);
        alert('Nutzername erfolgreich gespeichert');
        console.log('Nutzername erfolgreich gespeichert');

        this.usernameError = null;
      }
    });
  }
}