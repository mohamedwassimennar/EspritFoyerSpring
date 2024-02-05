import { UpdateBlocComponent } from './../../pages/update-bloc/update-bloc.component';
import { AddBlocComponent } from './../../pages/add-bloc/add-bloc.component';
import { CommonModule } from '@angular/common';
import { ListblocComponent } from './../../listbloc/listbloc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'list',component:ListblocComponent},
  {path:'add',component:AddBlocComponent},
  { path: 'update/:id', component: UpdateBlocComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
