import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'RTX 4040ti',
      precio: 1500
    })
  }

  // sin FormBuilder:
  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    // child_control o campo    : [ valor, validador_sync , validador_async ]
    nombre     : [ , [ Validators.required, Validators.minLength(3) ] ],
    precio     : [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  campoNoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
    
  }

}
