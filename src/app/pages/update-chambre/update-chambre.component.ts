import { ChambreService } from 'src/app/Services/ChambreService';
import { ChambreModel } from './../../Models/Chambre';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent {
  chambreId?: number;
  chambreToUpdate!: ChambreModel;
  reactiveForm: FormGroup;

  constructor(
    private router: Router,
    private chambreService: ChambreService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.reactiveForm = this.fb.group({
      idChambre: 0,
      numeroChambre: 0,
      typeC: ''
    });
  }

  ngOnInit(): void {
    this.chambreId = this.route.snapshot.params['id'];
    if (this.chambreId !== undefined) {
      this.chambreService.retrieveChambre(this.chambreId).subscribe(
        (data: ChambreModel) => {
          this.chambreToUpdate = data;
          this.reactiveForm.patchValue({
            idChambre: this.chambreToUpdate.idChambre,
            numeroChambre: this.chambreToUpdate.numeroChambre,
            typeC: this.chambreToUpdate.typeC,
          });
        },
        (error) => {
          console.error('Error Retrieving Chambre:', error);
        }
        
      );
      console.log('Chambre ID:', this.chambreId);
console.log('Chambre to Update:', this.chambreToUpdate);

    }
  }

  update() {
    const updatedChambre: ChambreModel = {
      idChambre: this.reactiveForm.value.idChambre,
      numeroChambre: this.reactiveForm.value.numeroChambre,
      typeC: this.reactiveForm.value.typeC
    };
    if (this.reactiveForm.valid) {

      this.chambreService.UpdateChambreById(this.chambreId!, updatedChambre).subscribe(
        () => {
          console.log('Chambre updated successfully');
          this.router.navigate(['/Chambre/listchambre']);
        },
        (error) => {
          console.error('Error updating Chambre:', error);
        }
      )}
      }

}
