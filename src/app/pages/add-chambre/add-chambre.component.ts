import { ChambreService } from 'src/app/Services/ChambreService';
import { ChambreModel } from './../../Models/Chambre';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {
  listChambre: ChambreModel[] = [];
  result = 0;
  newChambre: ChambreModel = { idChambre:0, numeroChambre:0,typeC:''};
  showForm = false;
  selectedUni: ChambreModel | null = null; 
  searchTerm = '';
  searchResults: ChambreModel[] = [];
  chambreForm: FormGroup;



  constructor(private _router: Router, private _chambreService: ChambreService, private fb: FormBuilder) {
    this.chambreForm = this.fb.group({
      numeroChambre: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      typeC: ['', [Validators.required]]
  });}

  addChambre(newChambre: ChambreModel): void {
    this._chambreService.AddChambre(newChambre).subscribe({
      next: (addedchambre) => {
        this.listChambre.push(addedchambre as ChambreModel);
        this.showForm = false;
        alert('Chambre added successfully'); // Replace with your preferred notification method
        // Navigate to the listchambre route after successful addition
        this._router.navigate(['/Chambre/listchambre']);
      },
      error: (err) => {
        console.log('Error adding Chambre:', err);
        alert('Error adding Chambre'); // Replace with your preferred notification method
      }
    });
  }
  
}
