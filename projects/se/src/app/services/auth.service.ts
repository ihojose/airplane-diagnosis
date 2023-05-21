import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { FormUtil } from "../includes/form.util";
import { TokenModel } from "../model/token.model";
import { ResponseApi } from "../model/response.api";
import { UserModel } from "../model/user.model";

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( private http: HttpClient ) {
  }

  doLogin( username: string, password: string ): Observable<TokenModel> {
    return this.http.post<TokenModel>( environment.api.auth, new HttpParams( {
      fromObject: { username, password: encodeURIComponent( password ) }
    } ), {
      headers: new HttpHeaders( { ...FormUtil.X_WWW_FORM_URL_ENCODED } )
    } );
  }

  doRegistration( user: UserModel ): Observable<ResponseApi> {
    return this.http.post<ResponseApi>( environment.api.account, user, {
      headers: new HttpHeaders( { ...FormUtil.APPLICATION_JSON } )
    } );
  }
}
