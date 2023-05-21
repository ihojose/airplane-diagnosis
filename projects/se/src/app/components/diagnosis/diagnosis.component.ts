import { Component, OnInit } from '@angular/core';
import { OptionModel, RuleModel } from "../../model/rule.model";
import { DiagnosisService } from "../../services/diagnosis.service";
import { Uikit } from "../../includes/uikit/uikit";
import { SESSION_DATA } from "../../../environments/constants";
import { LocalStorageService } from "../../services/local-storage.service";
import { Router } from "@angular/router";
import { Jwt } from "../../includes/jwt";
import { JwtModel } from "../../model/jwt.model";

@Component( {
  selector: 'umb-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: [ './diagnosis.component.scss' ]
} )
export class DiagnosisComponent implements OnInit {
  public rule!: RuleModel;
  public history: RuleModel[] = [];
  public currentRule: string = "A";
  public loading: boolean = false;
  public error: string = "";
  public userData?: JwtModel;

  constructor( private router: Router, private diagnosis: DiagnosisService, private storage: LocalStorageService ) {
  }

  ngOnInit(): void {

    this.userData = Jwt.toObject( this.storage.get( SESSION_DATA ) );

    // Init first rule
    this.getRule( this.currentRule );
  }

  public getRule( id: string ): void {
    this.error = "";
    this.loading = true;
    this.diagnosis.getRule( id ).subscribe( {
      next: response => {
        this.loading = false;
        this.rule = response;
      },
      error: err => {
        this.loading = false;
        this.error = err.error.message;
        Uikit.notification().danger( err.error.message );
      }
    } )
  }

  public setOption( opt: OptionModel ): void {
    console.log( 'Option:', opt.description );
  }
}
