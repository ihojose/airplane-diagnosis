import { Component, OnInit } from '@angular/core';
import { SESSION_DATA } from "../../../environments/constants";
import { Router } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage.service";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { AdminMenuComponent } from "../../templates/admin-menu/admin-menu.component";
import { JwtModel } from "../../model/jwt.model";
import { Jwt } from "../../includes/jwt";

@Component( {
  selector: 'umb-expert',
  templateUrl: './expert.component.html',
  styleUrls: [ './expert.component.scss' ]
} )
export class ExpertComponent implements OnInit {
  public isAdmin: boolean = false;
  public userData?: JwtModel;

  constructor( private router: Router, private storage: LocalStorageService, private _bottomSheet: MatBottomSheet ) {
  }

  ngOnInit(): void {

    // Verify session
    if ( this.storage.get( SESSION_DATA ) === undefined ) {
      this.router.navigate( [ '', 'account', 'login' ], {} ).then( r => {
        // Redirect to dashboard
      } );
      return
    }

    // User data
    this.userData = Jwt.toObject( this.storage.get( SESSION_DATA ) );

    // Is Admin?
    this.isAdmin = this.userData?.role! > 1;
  }

  openBottomSheet(): void {
    this._bottomSheet.open( AdminMenuComponent );
  }

  logout(): void {
    this.storage.delete( SESSION_DATA );

    this.router.navigate( [ '', 'account', 'login' ], {} ).then( r => {
      // Redirect to dashboard
    } );
  }
}
