import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PagoComponent } from './components/pago/pago.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'pago/:id', component: PagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
