import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListblocComponent } from 'src/app/listbloc/listbloc.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { ListuserComponent } from 'src/app/listuser/listuser.component';



@NgModule({
  declarations: [
    
    ListuserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }