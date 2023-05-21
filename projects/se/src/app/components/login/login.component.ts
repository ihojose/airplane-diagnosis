import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Uikit } from "../../includes/uikit/uikit";
import { AuthService } from "../../services/auth.service";
import { LocalStorageService } from "../../services/local-storage.service";
import { SESSION_DATA } from "../../../environments/constants";
import { Router } from "@angular/router";

@Component( {
  selector: 'umb-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public loading: boolean = false;
  public error: string = '';

  constructor(
    private group: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorageService,
    private router: Router ) {
    this.login = group.group( {
      username: [ { value: '', disabled: false }, [ Validators.required ] ],
      password: [ { value: '', disabled: false }, [ Validators.required ] ],
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

  public doLogin(): void {
    if ( this.login!.invalid ) {
      Uikit.notification().warning( 'Ingresa tu usuario y contraseña.' );
      return;
    }

    this.loading = true;

    this.auth.doLogin( this.login.get( 'username' )?.value, this.login.get( 'password' )?.value ).subscribe( {
      next: response => {
        this.loading = false;

        // Save session
        this.storage.save( SESSION_DATA, response.token );

        this.router.navigate( [ '', 'expert', 'dashboard' ], {} ).then( _ => {
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
