import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonSelect, IonItem, IonSelectOption, SelectChangeEventDetail
} from '@ionic/angular/standalone';
import { IonSelectCustomEvent } from '@ionic/core'
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent,
    TrianguloComponent, IonSelect, IonItem, IonSelectOption,
    CommonModule],
})
export class HomePage {
  tipoFiguraGeometrica: string = ""

  constructor() { }
  esCirculo() { return this.tipoFiguraGeometrica == "circulo" }
  esTriangulo() { return this.tipoFiguraGeometrica == "triangulo" }

  manejarSeleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFiguraGeometrica = $event.detail.value
  }
}

