import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { ListEtudiantComponent } from 'src/app/list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from 'src/app/update-etudiant/update-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatTabsModule} from '@angular/material/tabs';

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import {HttpClientModule} from "@angular/common/http";



import {MatNativeDateModule} from '@angular/material/core';

import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatStepperModule} from '@angular/material/stepper';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EtudiantComponent } from 'src/app/etudiant/etudiant.component';


import { EtudiantCardListComponent } from 'src/app/etudiant-card-list/etudiant-card-list.component';




@NgModule({
  declarations: [  ListEtudiantComponent , UpdateEtudiantComponent,EtudiantComponent,EtudiantCardListComponent],
  imports: [
   
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
   
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EtudiantRoutingModule,
    FormsModule, ReactiveFormsModule, MatCardModule
  ]
})
export class EtudiantModule { }
