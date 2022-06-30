import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    MainPageComponent
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class DashboardModule { }
