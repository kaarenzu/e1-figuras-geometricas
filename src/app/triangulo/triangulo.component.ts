import { Component, OnInit } from '@angular/core';
import {
  IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonInput, IonItem,
  IonButton, IonList
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonInput, IonItem,
    IonButton, IonList]
})
export class TrianguloComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
