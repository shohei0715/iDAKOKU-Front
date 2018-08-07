import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }


const routes: Routes = [
  { path: 'login', component: AuthComponent }
];
