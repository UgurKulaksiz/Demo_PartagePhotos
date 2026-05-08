import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnap // Le composant FaceSnap est importé pour être utilisé dans le template de ce composant
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
