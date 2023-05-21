import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { RuleModel } from "../model/rule.model";

@Injectable( {
  providedIn: 'root'
} )
export class DiagnosisService {

  constructor( private http: HttpClient ) {
  }

  /**
   * Get Single Rule With All Details.
   * @param rule Rule ID.
   */
  public getRule( rule: string = 'A' ): Observable<RuleModel> {
    return this.http.get<RuleModel>( environment.api.get_rule.replace( '{id}', rule ) );
  }
}
