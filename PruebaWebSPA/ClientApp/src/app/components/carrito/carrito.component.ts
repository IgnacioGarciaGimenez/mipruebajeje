import { Component, OnInit } from '@angular/core';
import { BirrasService } from '../../servicios/birras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(_birras: BirrasService) { }

  ngOnInit() {
  }

}
