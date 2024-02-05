import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserQRCodeComponent } from './user-qr-code/user-qr-code.component';
import { UniversitiesComponent } from './universities/universities.component';
import { FoyersComponent } from './foyers/foyers.component';
import { UpdateUniComponent } from './update-uni/update-uni.component';
import { UpdatefoyerComponent } from './updatefoyer/updatefoyer.component';
import { AuthGuard } from './Services/AuthGuard';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'user',data:{breadcrumb:'User'},loadChildren:()=>import('./features/users/user.module').then(m=>m.UserModule)},
{ path: 'foy',data:{breadcrumb:'Foyer'},loadChildren:()=>import('./features/foyers/foyer.module').then(m=>m.FoyerModule)},

  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },

  { path: 'user/:id/qr-code', component: UserQRCodeComponent, canActivate: [AuthGuard] },
  { path: 'universite', component: UniversitiesComponent , canActivate: [AuthGuard]},
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard] },


  { path: 'updateuni/:id', component: UpdateUniComponent, canActivate: [AuthGuard] },
  { path: 'Bloc',data:{breadcrumb:'Bloc'},loadChildren:()=>import('../app/features/bloc/bloc.module').then(m=>m.BlocModule)},
  { path: 'Chambre',data:{breadcrumb:'Chambre'},loadChildren:()=>import('../app/features/chambre/chambre.module').then(m=>m.ChambreModule)},
  { path: 'Etudiant', data: { breadcrumb: 'Etudiant' }, loadChildren: () => import('../app/features/etudiant/etudiant.module').then(m=>m.EtudiantModule) },
  
  //  { path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard] },
  //{ path: 'foyer', component: FoyersComponent, canActivate: [AuthGuard] },
 // { path: 'updateuser/:id', component: UpdateuserComponent, canActivate: [AuthGuard] },
 // { path: 'listuser', component: ListuserComponent, canActivate: [AuthGuard] },
   // { path: 'updatefoyer/:id', component: UpdatefoyerComponent, canActivate: [AuthGuard] },
  // { path: 'listetu', component: ListEtudiantComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
