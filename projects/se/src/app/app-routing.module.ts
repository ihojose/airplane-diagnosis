import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { ExpertComponent } from "./components/expert/expert.component";
import { DiagnosisComponent } from "./components/diagnosis/diagnosis.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [ {
  path: 'account/login',
  component: LoginComponent,
  title: 'Autenticación'
}, {
  path: 'account/registration',
  component: RegistrationComponent,
  title: 'Registro de cuenta de usuario'
}, {
  path: 'expert',
  component: ExpertComponent,
  title: 'Sistema de diagnóstico',
  children: [ {
    path: 'diagnosis',
    component: DiagnosisComponent,
    title: 'Sistema de diagnóstico'
  }, {
    path: 'admin',
    component: AdminComponent,
    title: 'Panel de administración'
  } ]
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'expert/diagnosis'
} ];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, { onSameUrlNavigation: 'reload' } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
