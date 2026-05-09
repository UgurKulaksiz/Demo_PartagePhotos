import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap', // Le nom de la balise HTML qui représentera ce composant
  standalone: true,
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis toujours !";
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
  }
}
