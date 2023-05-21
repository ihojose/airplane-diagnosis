import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { LocalStorageService } from "../../services/local-storage.service";
import { Router } from "@angular/router";
import { SESSION_DATA } from "../../../environments/constants";
import { Uikit } from "../../includes/uikit/uikit";

@Component( {
  selector: 'umb-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.scss' ]
} )
export class RegistrationComponent implements OnInit {
  public reg: FormGroup;
  public loading: boolean = false;
  public error: string = '';

  constructor(
    private group: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorageService,
    private router: Router ) {

    this.reg = group.group( {
      id_type: [ { value: '', disabled: false }, [ Validators.required ] ],
      username: [ { value: '', disabled: false }, [ Validators.required ] ],
      name: [ { value: '', disabled: false }, [ Validators.required ] ],
      surname: [ { value: '', disabled: false }, [ Validators.required ] ],
      password: [ { value: '', disabled: false }, [ Validators.required ] ],
      re_password: [ { value: '', disabled: false }, [ Validators.required ] ],
    } );
  }

  ngOnInit(): void {

    // Verify session
    if ( this.storage.get( SESSION_DATA ) !== undefined ) {
      this.router.navigate( [ '' ], {} ).then( r => {
        // Redirect to dashboard
      } );
    }
  }

  public doRegistration(): void {
    if ( this.reg!.invalid ) {
      Uikit.notification().warning( 'El formulario debe ser válido para continuar.' );
      return;
    }

    if ( this.reg.get( 'password' )?.value !== this.reg.get( 're_password' )?.value ) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }

    this.loading = true;

    this.auth.doRegistration( {
      id: Number.parseInt( this.reg.get( 'username' )?.value ),
      id_type: this.reg.get( 'id_type' )?.value,
      name: this.reg.get( 'name' )?.value,
      surname: this.reg.get( 'surname' )?.value,
      password: this.reg.get( 'password' )?.value,
      role: 1
    } ).subscribe( {
      next: response => {
        this.loading = false;
        Uikit.notification().success( 'Tu cuenta ha sido registrada exitosamente.' );

        this.router.navigate( [ '', 'account', 'login' ], {} ).then( _ => {
          this.loading = false;
        } );
      },
      error: err => {
        this.loading = false;
        this.error = err.error.message;
      }
    } )
  }
}
