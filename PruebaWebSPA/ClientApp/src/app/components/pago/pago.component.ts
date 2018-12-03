import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  formulario: FormGroup;

  nombre: FormControl;
  apellido: FormControl;
  email: FormControl;
  direccion: FormControl;
  numeroDir: FormControl;
  private maxlength = 20;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nombre = new FormControl('', [Validators.required, Validators.maxLength(this.maxlength)]);
    this.apellido = new FormControl('', [Validators.required, Validators.maxLength(this.maxlength)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.direccion = new FormControl('', [Validators.pattern(/^[a-zA-Z\s]*$/)]);
    this.numeroDir = new FormControl('', [Validators.pattern(/^[1-9][0-9]*$/)])
    this.formulario = this._formBuilder.group({
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      direccion: this.direccion,
      numeroDir: this.numeroDir
    })

  }

  getErrorMsgNombre() {
    return this.nombre.hasError('required') ? "Debe ingresar su nombre" :
      this.nombre.hasError('maxlength') ? "Máximo " + this.maxlength + " caracteres" :
        '';
  }

  getErrorMsgApellido() {
    return this.apellido.hasError('required') ? "Debe ingresar su apellido" :
      this.apellido.hasError('maxlength') ? "Máximo " + this.maxlength + " caracteres":
        '';
  }

  getErrorMsgEmail() {
    return this.email.hasError('required') ? "Debe ingresar su email" :
      this.email.hasError('email') ? "Ingrese un email valido" :
        '';

  }

  getErrorMsgDireccion() {
    return this.direccion.hasError('pattern') ? "No se admiten números" :
      '';
  }

  getErrorMsgNumeroDir() {
    return this.numeroDir.hasError('pattern') ? "Sólo se admiten números" :
      '';
  }

}
