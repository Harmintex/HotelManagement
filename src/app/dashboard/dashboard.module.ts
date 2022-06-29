import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    MainPageComponent
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatSortModule
  ]
})
export class DashboardModule { }
