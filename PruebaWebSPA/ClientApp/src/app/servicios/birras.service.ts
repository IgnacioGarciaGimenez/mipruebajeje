import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirrasService {

  private birras = [
    { id: 1, nombre: "Rubia Dorada", descripcion: "Suave sabor a malta", img: "http://revistaelconocedor.com/wp-content/uploads/2017/03/cc-1024x871.jpg", precio: 10 },
    { id: 2, nombre: "Negra Opaca", descripcion: "Gran amargor", img: "https://st2.depositphotos.com/3215143/9062/i/950/depositphotos_90627876-stock-photo-mug-filled-with-dark-beer.jpg", precio: 15 },
    { id: 3, nombre: "La Irlandesa", descripcion: "Especialidad de la casa", img: "https://www.cerveza-artesanal.co/wp-content/uploads/2017/01/polaris-roja-strong-bitter-receta-cerveza.jpg", precio: 20 },
    { id: 4, nombre: "Rubia Dorada", descripcion: "Suave sabor a malta", img: "http://revistaelconocedor.com/wp-content/uploads/2017/03/cc-1024x871.jpg", precio: 10 },
    { id: 5, nombre: "Negra Opaca", descripcion: "Gran amargor", img: "https://st2.depositphotos.com/3215143/9062/i/950/depositphotos_90627876-stock-photo-mug-filled-with-dark-beer.jpg", precio: 15 },
    { id: 6, nombre: "La Irlandesa", descripcion: "Especialidad de la casa", img: "https://www.cerveza-artesanal.co/wp-content/uploads/2017/01/polaris-roja-strong-bitter-receta-cerveza.jpg", precio: 20 },
    { id: 7, nombre: "Rubia Dorada", descripcion: "Suave sabor a malta", img: "http://revistaelconocedor.com/wp-content/uploads/2017/03/cc-1024x871.jpg", precio: 10 },
    { id: 8, nombre: "Negra Opaca", descripcion: "Gran amargor", img: "https://st2.depositphotos.com/3215143/9062/i/950/depositphotos_90627876-stock-photo-mug-filled-with-dark-beer.jpg", precio: 15 },
    { id: 9, nombre: "La Irlandesa", descripcion: "Especialidad de la casa", img: "https://www.cerveza-artesanal.co/wp-content/uploads/2017/01/polaris-roja-strong-bitter-receta-cerveza.jpg", precio: 20 }
  ]

  constructor() { }

  public getBirras() {
    return this.birras;


  }

}
