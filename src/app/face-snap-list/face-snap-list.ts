import { Component, OnInit } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';
import { FaceSnap } from "../face-snap/face-snap";

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnap
  ],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
  faceSnaps!: FaceSnapModel[];

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
