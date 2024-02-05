import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { foyer } from '../Models/foyer';
import { FoyerService } from '../Services/foyer.service';

@Component({
  selector: 'app-updatefoyer',
  templateUrl: './updatefoyer.component.html',
  styleUrls: ['./updatefoyer.component.css']
})
export class UpdatefoyerComponent implements OnInit {
  uniId?: number;
  uniToUpdate?: foyer;

  reactiveForm: FormGroup;

  constructor(
    private router: Router,
    private universiteService: FoyerService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.reactiveForm = this.fb.group({
      idFoyer: [''],
      nomFoyer: [''],
      capaciteFoyer: ['']
    });
  }

  ngOnInit(): void {
    this.uniId = this.route.snapshot.params['id'];
    if (this.uniId !== undefined) {
      this.universiteService.fetchfoyerById(this.uniId).subscribe(data => {
        this.uniToUpdate = data;
        this.reactiveForm.patchValue({
          idFoyer: this.uniToUpdate.idFoyer,
          nomFoyer: this.uniToUpdate.nomFoyer,
          capaciteFoyer: this.uniToUpdate.capaciteFoyer
        });
      });
    }
  }
  

  update() {
    const updatedUni: foyer = {
      idFoyer: this.reactiveForm.value.idFoyer,
      nomFoyer: this.reactiveForm.value.nomFoyer,
      capaciteFoyer: this.reactiveForm.value.capaciteFoyer
    };

    this.universiteService.updatefoyer(this.uniId!, updatedUni).subscribe(
      () => {
        console.log('University updated successfully');
        this.router.navigate(['foyer']);
      },
      error => {
        console.error('Error updating university:', error);
        // Handle errors as needed
      }
    );
  }

}