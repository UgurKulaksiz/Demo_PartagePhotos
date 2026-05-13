import { Component, OnInit } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';
import { FaceSnap } from "../face-snap/face-snap";
import { FaceSnapsService } from '../services/face-snaps.service';

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

  /* Le service FaceSnapsService est injecté dans le constructeur du composant 
  pour être utilisé dans la méthode ngOnInit */
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
}
