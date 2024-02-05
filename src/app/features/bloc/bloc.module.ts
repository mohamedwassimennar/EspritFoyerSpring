import { BlocRoutingModule } from './bloc-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListblocComponent } from 'src/app/listbloc/listbloc.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListblocComponent
    
    
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule
  ]
})
export class BlocModule { }
