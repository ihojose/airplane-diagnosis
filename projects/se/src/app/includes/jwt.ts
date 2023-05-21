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
import { JwtModel } from "../model/jwt.model";

export class Jwt {
  /**
   * Decode JWT code from token authentication.
   * @param token jwt code
   */
  public static toObject( token: string ): JwtModel | undefined {
    if ( token === undefined || token === null || token === '' ) {
      return undefined;
    }

    token = token.split( '.' )[ 1 ];
    token = token.replace( /-/g, '+' ).replace( /_/g, '/' );

    switch ( token.length % 4 ) {
      case 0:
        break;
      case 2:
        token += '==';
        break;
      case 3:
        token += '=';
        break;
      default:
        console.error( `Invalid request token [${ token }]` );
        break;
    }

    token = ( token + '===' ).substr( 0, token.length + ( token.length % 4 ) );
    token = token.replace( /-/g, '+' ).replace( /_/g, '/' );
    token = decodeURIComponent( atob( token ) );

    return JSON.parse( token ) as JwtModel;
  }
}
