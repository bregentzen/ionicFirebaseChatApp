# ionicFirebaseChatApp

Lernziele
§ Arbeiten mit Angular, ionic und firebase

Aufgabenstellung
Im vierten Meilenstein ist Ihre Aufgabe eine Chat-Applikation zu entwickeln, auf die alle
TeilnehmerInnen des Praktikums gleichzeitig zugreifen können.

1. Erstellen Sie eine simple ionic App mit zwei Tabs (Chat und Einstellungen). (1 Punkt)
  
2. In einer Firebase-Datenbank liegen vorgefertigte Datensätze in einer Collection mit dem
  Namen „room_0“. Die Datensätze beinhalten ausschließlich die Keys „author“, „text“ und
  „timestamp“. Zeigen Sie im Chat-Tab untereinander zeitlich sortiert alle drei Nachrichten als
  Liste an (Autor und Text genügen). Die Reihenfolge der AutorInnen sollte dann sein: Sandra,
  Martin, Björn. Sie finden die Konfigurationsdaten im Ilias-Ordner für die Meilensteine. Nutzen
  Sie NICHT die compat(ibility) Version von AngularFire. Die Dokumentation auf der Startseite
  des Github-Repositories zeigt Ihnen den korrekten Weg. (4 Punkte)

3. Fügen Sie nun die Möglichkeit im Chat-Tab hinzu neue Nachrichten zu versenden. Dies kann
  z.B. durch ein input-Feld, welches immer sichtbar ist, realisiert werden. Sie müssen darauf
  achten, dass Sie den timestamp (WICHTIG!!! den Server-Timestamp der Firebase-Datenbank s.
  unten) für jede Nachricht mitspeichern, also author, text und timestamp. Nutzen Sie bitte
  hierfür die Collection „room_1“. Sehen sie in diesem Teil vor ihren eigenen Namen als Wert für
  author zu speichern. (3 Punkte)

4. Erzeugen Sie nun die Möglichkeit im Einstellungen-Tab einen Nutznamen zu wählen. Sollte
  dieser bereits verwendet werden (d.h. in einer der Chat-Nachrichten benutzt worden sein), so
  soll ein neuer Nutzername gewählt werden müssen. Speichern Sie diesen Namen im
  LocalStorage ab. (2 Punkte)
  import { serverTimestamp } from '@angular/fire/firestore';
  let timestamp = serverTimestamp();
