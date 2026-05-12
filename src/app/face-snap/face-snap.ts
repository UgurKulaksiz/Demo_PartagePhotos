import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';
import { DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from "@angular/common";

@Component({
  selector: 'app-face-snap', // Le nom de la balise HTML qui représentera ce composant
  standalone: true,
  imports: [
    NgStyle, 
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
  @Input() faceSnapModel!: FaceSnapModel; // Propriété d'entrée pour recevoir les données d'un FaceSnap

  snapButtonText!: string;
  userHasSnapped!: boolean;
  myLargeNumber: number = 4667916.76;

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    this.snapButtonText = "Oh Snap !";
    this.userHasSnapped = false;
  }

  onSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapModel.removeSnap();
    this.snapButtonText = "Oh Snap !";
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapModel.addSnap();
    this.snapButtonText = "Oops, unSnap !";
    this.userHasSnapped = true;
  }
}
