/**
 * Copyright (c) 2023 Banco de Bogota. All Rights Reserved.
 * <p>
 * airbus-expert was developed by Core Banking - Gerencia de Desarrollo.
 * <p>
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * proprietary and confidential. For use this code you need to contact to
 * Banco de Bogotá and request exclusive use permission.
 * <p>
 * This file was write by Jose Buelvas <jbuelva@bancodebogota.com.co>.
 */
declare var UIkit: any;

export class OffCanvas {
  constructor( private element: string, private options: {} ) {
  }

  public show(): void {
    // noinspection TypeScriptValidateJSTypes
    if ( UIkit.modal( this.element, this.options ) !== undefined ) {
      UIkit.offcanvas( this.element, this.options ).show();
    }
  }

  public hide(): void {
    // noinspection TypeScriptValidateJSTypes
    if ( UIkit.modal( this.element, this.options ) !== undefined ) {
      UIkit.offcanvas( this.element, this.options ).hide();
    }
  }
}
