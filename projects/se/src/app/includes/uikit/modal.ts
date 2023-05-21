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

export class Modal {
  constructor( private selector: string, private options: {} ) {
  }

  public show(): void {
    // noinspection TypeScriptValidateJSTypes
    if ( UIkit.modal( this.selector, this.options ) !== undefined ) {
      UIkit.modal( this.selector, this.options ).show();
    }
  }

  public hide(): void {
    // noinspection TypeScriptValidateJSTypes
    if ( UIkit.modal( this.selector, this.options ) !== undefined ) {
      UIkit.modal( this.selector, this.options ).hide();
    }
  }

  /**
   * Custom dialog creation
   * @param content HTML Content
   */
  public dialog( content: string = '' ): PrototypeUikit {
    return new PrototypeUikit( content, this.options );
  }
}

export class PrototypeUikit {
  private ifThen: boolean = false;

  constructor( private content: string, private options: {} ) {
    if ( !this.ifThen ) {
      UIkit.modal.dialog( this.content, this.options );
    }
  }

  public then( func: ( r: any ) => any ): void {
    UIkit.modal.dialog( this.content, this.options ).then( func );
  }
}
