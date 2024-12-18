import { Component, OnInit } from '@angular/core';

import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonItem,
  IonButton, IonList
} from '@ionic/angular/standalone';
import { Circulo } from '../modelo/figuraGeometrica';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [FormsModule, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonInput, IonItem, IonButton, IonList]
})

export class CirculoComponent implements OnInit {
  radio: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() { }
  // Se crea función para calcular el perimetro e instanciar la clase Circulo
  calcularPerimetro() {
    const radio = parseInt(this.radio)
    const circulo = new Circulo(radio, "circulo")
    const perimetro = circulo.calcularPerimetro()
    this.resultado = `El perímetro es ${perimetro} cm`
  }


}
