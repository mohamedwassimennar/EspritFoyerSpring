import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantComponent } from 'src/app/list-etudiant/list-etudiant.component';
import { EtudiantComponent } from 'src/app/etudiant/etudiant.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEtudiantComponent } from 'src/app/update-etudiant/update-etudiant.component';
import { AuthGuard } from 'src/app/Services/AuthGuard';
const routes: Routes = [
	{ path: 'add', component: EtudiantComponent , canActivate: [AuthGuard] },
  {path:'update/:id',component:UpdateEtudiantComponent , canActivate: [AuthGuard]},
	{ path: '', component: ListEtudiantComponent },
	
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
	exports: [RouterModule]
})
export class EtudiantRoutingModule { }
