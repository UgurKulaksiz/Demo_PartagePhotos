import { Component, OnInit, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapList } from "./face-snap-list/face-snap-list";
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    FaceSnapList // Le composant FaceSnapList est importé pour être utilisé dans le template de ce composant
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
