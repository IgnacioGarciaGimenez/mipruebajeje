import { Component, OnInit } from '@angular/core';
import { BirrasService } from '../../servicios/birras.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  private cervezas: Array<Object>;
  
  constructor(private _birras: BirrasService) {
    

  }

  ngOnInit() {
    this.cervezas = this._birras.getBirras();
  }

}
