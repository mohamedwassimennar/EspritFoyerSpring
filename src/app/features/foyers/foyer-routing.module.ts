import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListuserComponent } from 'src/app/listuser/listuser.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { UpdateuserComponent } from 'src/app/updateuser/updateuser.component';
import { UserQRCodeComponent } from 'src/app/user-qr-code/user-qr-code.component';
import { AuthGuard } from 'src/app/Services/AuthGuard';
import { FoyersComponent } from 'src/app/foyers/foyers.component';
import { UpdatefoyerComponent } from 'src/app/updatefoyer/updatefoyer.component';

const routes: Routes = [
    { path: 'foyer', component: FoyersComponent, canActivate: [AuthGuard] },
    { path: 'updatefoyer/:id', component: UpdatefoyerComponent, canActivate: [AuthGuard] },


 




];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }