import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListblocComponent } from 'src/app/listbloc/listbloc.component';
import { FormsModule } from '@angular/forms';
import { ListuserComponent } from 'src/app/listuser/listuser.component';
import { FoyersComponent } from 'src/app/foyers/foyers.component';
import { FoyerRoutingModule } from './foyer-routing.module';



@NgModule({
  declarations: [
    
  FoyersComponent  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    FormsModule
  ]
})
export class FoyerModule { }