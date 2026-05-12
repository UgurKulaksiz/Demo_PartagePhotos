import { Component, OnInit, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapModel } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnap // Le composant FaceSnap est importé pour être utilisé dans le template de ce composant
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  faceSnaps!: FaceSnapModel[];

  mySnap!: FaceSnapModel;
  myOtherSnap!: FaceSnapModel;
  myLastSnap!: FaceSnapModel;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnapModel(
        "Archibald",
        "Mon meilleur ami depuis toujours !",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        new Date(),
        10
      ),
      new FaceSnapModel(
        "Three Rock Mountain",
        "Un endroit magnifique pour les randonnées !",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/960px-Three_Rock_Mountain_Southern_Tor.jpg",
        new Date(),
        6
      ),
      new FaceSnapModel(
        "Un bon repas",
        "Mmmh que c'était bon !",
        "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        new Date(),
        156
      )
    ];

    this.faceSnaps[0].setLocation("à la montagne");
  }
}
