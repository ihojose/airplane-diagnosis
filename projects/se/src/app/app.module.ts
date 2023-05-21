import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ExpertComponent } from './components/expert/expert.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminMenuComponent } from './templates/admin-menu/admin-menu.component';
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import { MatLineModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

@NgModule( {
  declarations: [
    AppComponent,
    LoginComponent,
    DiagnosisComponent,
    ExpertComponent,
    AdminComponent,
    RegistrationComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    SweetAlert2Module,
    MatBottomSheetModule,
    MatListModule,
    MatLineModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
  constructor() {

  }
}
