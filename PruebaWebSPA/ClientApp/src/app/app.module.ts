import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagoComponent } from './components/pago/pago.component';
import { BirrasService } from './servicios/birras.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    NavBarComponent,
    PagoComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BirrasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
