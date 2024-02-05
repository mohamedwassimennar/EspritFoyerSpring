import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from './../../Services/BlocService';
import { BlocModel } from './../../Models/Bloc';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  blocId?: number;
  blocToUpdate!: BlocModel;
  reactiveForm: FormGroup;

  constructor(
    private router: Router,
    private blocService: BlocService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.reactiveForm = this.fb.group({
      idBloc: 0,
      nomBloc: [''],
      capacitebloc: 0
    });
  }

  ngOnInit(): void {
    this.blocId = this.route.snapshot.params['id'];
    if (this.blocId !== undefined) {
      this.blocService.retrieveBloc(this.blocId).subscribe(
        (data: BlocModel) => {
          this.blocToUpdate = data;
          this.reactiveForm.patchValue({
            idBloc: this.blocToUpdate.idBloc,
            nomBloc: this.blocToUpdate.nomBloc,
            capacitebloc: this.blocToUpdate.capacitebloc
          });
        },
        (error) => {
          console.error('Error retrieving bloc:', error);
          // Handle error, e.g., show an alert or redirect to an error page
        }
        
      );
      console.log('Bloc ID:', this.blocId);
console.log('Bloc to Update:', this.blocToUpdate);

    }
  }

  update() {
    const updatedBloc: BlocModel = {
      idBloc: this.reactiveForm.value.idBloc,
      nomBloc: this.reactiveForm.value.nomBloc,
      capacitebloc: this.reactiveForm.value.capacitebloc
    };
    if (this.reactiveForm.valid) {

      this.blocService.UpdateBlocById(this.blocId!, updatedBloc).subscribe(
        () => {
          console.log('Bloc updated successfully');
          this.router.navigate(['/Bloc/list']);
        },
        (error) => {
          console.error('Error updating bloc:', error);
          // Handle error, e.g., show an alert or redirect to an error page
        }
      )}
      }
    }
