import { Injectable } from "@angular/core";
import { FaceSnapModel } from "../models/face-snap-model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnapModel[] = [
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
        ).withLocation("à la montagne"),
        new FaceSnapModel(
            "Un bon repas",
            "Mmmh que c'était bon !",
            "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
            new Date(),
            156
        )
    ];

    getFaceSnaps(): FaceSnapModel[] {
        return [...this.faceSnaps];
    }
}