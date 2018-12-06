import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { BirrasService } from '../../servicios/birras.service';


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
  formaPago: FormControl;
  montoEfectivo: FormControl;
  cardHolder: FormControl;
  expirationDate: FormControl;
  cardNumber: FormControl;
  cardCcv: FormControl;
  cerveza;
  private maxlength = 20;

  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute, private _birras: BirrasService) { }

  ngOnInit() {
    this.nombre = new FormControl('', [Validators.required, Validators.maxLength(this.maxlength)]);
    this.apellido = new FormControl('', [Validators.required, Validators.maxLength(this.maxlength)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.direccion = new FormControl('', [Validators.pattern(/^[a-zA-Z\s]*$/)]);
    this.numeroDir = new FormControl('', [Validators.pattern(/^[1-9][0-9]*$/)]);
    this.formaPago = new FormControl('', [Validators.required]);
    this.montoEfectivo = new FormControl('', [Validators.pattern(/^[1-9][0-9]*$/)]);
    this.cardHolder = new FormControl('', [Validators.pattern(/^[a-zA-Z\s]*$/)]);
    this.expirationDate = new FormControl('', [Validators.pattern(/^(0[1-9]|1[0-2])\/?([1-9][0-9])$/)]);
    this.cardNumber = new FormControl('', [Validators.pattern(/^([0-9]{4}\s){3}[0-9]{4}$/)]);
    this.cardCcv = new FormControl('', [Validators.pattern(/^[0-9]{3}$/)]);
    this.formulario = this._formBuilder.group({
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      direccion: this.direccion,
      numeroDir: this.numeroDir,
      formaPago: this.formaPago,
      montoEfectivo: this.montoEfectivo,
      cardHolder: this.cardHolder,
      expirationDate: this.expirationDate,
      cardNumber: this.cardNumber,
      cardCcv: this.cardCcv
    })

    this.formulario.controls['numeroDir'].valueChanges.subscribe(val => {
     
      if (val != '') {
        console.log("entre al if")
        this.formulario.controls['direccion'].setValidators([Validators.pattern(/^[a-zA-Z\s]*$/), Validators.required]);
      } else {

        console.log('entre al else')
        this.formulario.controls['direccion'].setValidators([Validators.pattern(/^[a-zA-Z\s]*$/)]);
      }
      this.formulario.controls['direccion'].updateValueAndValidity();
    })

    this.formulario.controls['direccion'].valueChanges.subscribe(val => {

      if (val != '') {

        this.formulario.controls['numeroDir'].setValidators([Validators.pattern(/^[1-9][0-9]*$/), Validators.required]);
      } else {

        this.formulario.controls['numeroDir'].setValidators([Validators.pattern(/^[1-9][0-9]*$/)]);
      }
      this.formulario.controls['numeroDir'].updateValueAndValidity();

    });

    this.formulario.controls['formaPago'].valueChanges.subscribe(val => {
      if (val == 'efectivo') {
        this.formulario.controls['montoEfectivo'].setValidators([Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]);
        this.formulario.controls['montoEfectivo'].updateValueAndValidity()
        this.formulario.controls['cardHolder'].reset();
        this.formulario.controls['expirationDate'].reset();
        this.formulario.controls['cardNumber'].reset();
        this.formulario.controls['cardCcv'].reset();
      } else {
        console.log('entre')
        this.formulario.controls['montoEfectivo'].reset();  
        this.formulario.controls['cardHolder'].setValidators([Validators.pattern(/^[a-zA-Z\s]*$/), Validators.required]);
        this.formulario.controls['expirationDate'].setValidators([Validators.pattern(/^(0[1-9]|1[0-2])\/?([1-9][0-9])$/), Validators.required]);
        this.formulario.controls['cardNumber'].setValidators([Validators.pattern(/^([0-9]{4}\s){3}[0-9]{4}$/), Validators.required]);
        this.formulario.controls['cardCcv'].setValidators([Validators.pattern(/^[0-9]{3}$/), Validators.required]);
        this.formulario.controls['cardHolder'].updateValueAndValidity();
        this.formulario.controls['expirationDate'].updateValueAndValidity();
        this.formulario.controls['cardNumber'].updateValueAndValidity();
        this.formulario.controls['cardCcv'].updateValueAndValidity();
      }

    });

    let id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.cerveza = this._birras.getBirra(id);
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
      this.direccion.hasError('required') ? "Debe Ingresar Calle" :
        '';
  }

  getErrorMsgNumeroDir() {
    return this.numeroDir.hasError('pattern') ? "Sólo se admiten números" :
      this.numeroDir.hasError('required') ? 'Debe Ingresar Número de calle' :
        '';
  }

  getErrorMsgMonto() {
    return this.montoEfectivo.hasError('pattern') ? "Sólo se admiten números" :
      this.montoEfectivo.hasError('required') ? "Debe Ingresar monto" :
        '';
  }

  getErrorMsgCardHolder() {
    return this.cardHolder.hasError('pattern') ? "Sólo letras" :
      this.cardHolder.hasError('required') ? "Requerido" :
        '';
  }

  getErrorMsgExpirationDate() {
    return this.expirationDate.hasError('pattern') ? "Formato: MM/AA" :
      this.expirationDate.hasError('required') ? 'Requerido' :
        '';

  }

  getErrorMsgCardNumber() {
    return this.cardNumber.hasError('pattern') ? 'Formato de tarjeta inválido' :
      this.cardNumber.hasError('required') ? 'Requerido' :
        '';
  }

  getErrorMsgCardCcv() {
    return this.cardCcv.hasError('pattern') ? 'Formato de CCV inválido' :
      this.cardCcv.hasError('required') ? 'Requerido' :
        '';
  }

}

