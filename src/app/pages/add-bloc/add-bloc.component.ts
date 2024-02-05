import { BlocModel } from './../../Models/Bloc';
import { BlocService } from './../../Services/BlocService';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {
  listBloc: BlocModel[] = [];
  result = 0;
  newBloc: BlocModel = { idBloc:0, nomBloc: '',capacitebloc:0};
  showForm = false;
  selectedUni: BlocModel | null = null; 
  searchTerm = '';
  searchResults: BlocModel[] = [];
  blocForm: FormGroup;



  constructor(private _router: Router, private _blocService: BlocService, private fb: FormBuilder) {
    this.blocForm = this.fb.group({
    nomBloc: ['', [Validators.required, Validators.pattern(/[A-Za-z].*/)]],
    capacitebloc: ['', [Validators.required]]
  });}

  addBloc(newBloc: BlocModel): void {
    this._blocService.AddBloc(newBloc).subscribe({
      next: (addedbloc) => {
        this.listBloc.push(addedbloc as BlocModel);
        this.showForm = false;
        alert('Bloc added successfully'); // Replace with your preferred notification method
        // Navigate to the list route after successful addition
        this._router.navigate(['/Bloc/list']);
      },
      error: (err) => {
        console.log('Error adding Bloc:', err);
        alert('Error adding Bloc'); // Replace with your preferred notification method
      }
    });
  }
  

  
  searchByName() {
    if (this.searchTerm.trim() === '') {
      this.searchResults = [];
      return;
    }
  
    
  }
}
