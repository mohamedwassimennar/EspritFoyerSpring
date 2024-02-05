import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserQRCodeComponent } from './user-qr-code/user-qr-code.component';
import { FoyersComponent } from './foyers/foyers.component';
import { UniversitiesComponent } from './universities/universities.component';
import { UpdatefoyerComponent } from './updatefoyer/updatefoyer.component';
import { UpdateUniComponent } from './update-uni/update-uni.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { AddBlocComponent } from './pages/add-bloc/add-bloc.component';
import { AddChambreComponent } from './pages/add-chambre/add-chambre.component';
import { UpdateBlocComponent } from './pages/update-bloc/update-bloc.component';
import { UpdateChambreComponent } from './pages/update-chambre/update-chambre.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddUserComponent,
    HomeComponent,
    InscriptionComponent,
    MenuComponent,
    UpdateuserComponent,
    //ListuserComponent,
    UserQRCodeComponent,
    //FoyersComponent,
    UniversitiesComponent,
    UpdatefoyerComponent,
    UpdateUniComponent,
    NotfoundComponent,
    AddBlocComponent,
    AddChambreComponent,
    UpdateBlocComponent,
    UpdateChambreComponent,
    FooterComponent,
   
   
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
