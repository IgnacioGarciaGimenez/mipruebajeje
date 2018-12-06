import { Component, OnInit } from '@angular/core';
import { BirrasService } from '../../servicios/birras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  private cervezas: Array<Object>;
  
  constructor(private _birras: BirrasService, private _router: Router) {
    

  }

  ngOnInit() {
    this.cervezas = this._birras.getBirras();
  }

  onBuy(cerveza) {
    this._router.navigate(['/pago', cerveza.id]);

  }

}
