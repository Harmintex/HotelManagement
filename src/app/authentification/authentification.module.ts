import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Material
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AuthentificationModule { }
