import { Component } from '@angular/core';
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component( {
  selector: 'umb-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: [ './admin-menu.component.scss' ]
} )
export class AdminMenuComponent {
  constructor( private _bottomSheetRef: MatBottomSheetRef<AdminMenuComponent> ) {
  }

  openLink(): void {
    this._bottomSheetRef.dismiss();
  }
}
