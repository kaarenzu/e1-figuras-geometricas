import { Component, OnInit } from '@angular/core';

import {
  IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonInput, IonItem,
  IonButton, IonList
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonInput, IonItem, IonButton, IonList]

})
export class CirculoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
