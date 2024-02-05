import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChambreRoutingModule } from './chambre-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListchambreComponent } from 'src/app/listchambre/listchambre.component';



@NgModule({
  declarations: [
    ListchambreComponent,

  ],
  imports: [CommonModule, ChambreRoutingModule],

})
export class ChambreModule { }
