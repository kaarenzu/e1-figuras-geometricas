import { Component, OnInit } from '@angular/core';
import {
  IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonInput, IonItem,
  IonButton, IonList
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/figuraGeometrica';
@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [FormsModule, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonInput, IonItem,
    IonButton, IonList]
})


export class TrianguloComponent implements OnInit {
  ladoA: string = "";
  ladoB: string = "";
  ladoC: string = "";
  resultado: string = "";

  constructor() { }

  // Se crea función para calcular el perimetro e instanciar la clase Triangulo
  calcularPerimetroTriangulo() {
    const ladoA = parseInt(this.ladoA)
    const ladoB = parseInt(this.ladoB)
    const ladoC = parseInt(this.ladoC)
    const triangulo = new TrianguloEscaleno(ladoA, ladoB, ladoC)
    const perimetro = triangulo.calcularPerimetro()
    this.resultado = `El perimetro es ${perimetro}`


  }

  ngOnInit() { }

}
