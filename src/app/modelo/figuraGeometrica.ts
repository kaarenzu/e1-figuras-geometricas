// Creo la primera clase abstracta de la jerarquía
export abstract class FiguraGeometrica {
    nombre: string
    constructor(nombre: string) {
        this.nombre = nombre
    }
    abstract calcularPerimetro(): number

}

// creo la clase circulo
export class Circulo extends FiguraGeometrica {
    radio: number
    constructor(radio: number, nombre: string) {
        super(nombre)
        this.radio = radio
    }
    override calcularPerimetro(): number {
        const circunferencia = 3.14 * 2
        const perimetro = circunferencia * this.radio
        return perimetro
    }
}

// creo la clase TrianguloEscaleno
export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number
    ladoB: number
    ladoC: number

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super("")
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC

    }
    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }

}
