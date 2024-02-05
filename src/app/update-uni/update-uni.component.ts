import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { universite } from '../Models/universite';
import { UniversiteService } from '../Services/universite.service';

@Component({
  selector: 'app-update-uni',
  templateUrl: './update-uni.component.html',
  styleUrls: ['./update-uni.component.css']
})
export class UpdateUniComponent implements OnInit {
  uniId?: number;
  uniToUpdate?: universite;

  reactiveForm: FormGroup;

  constructor(
    private router: Router,
    private universiteService: UniversiteService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.reactiveForm = this.fb.group({
      idUniversite: [''],
      nomUniversite: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.uniId = this.route.snapshot.params['id'];
    if (this.uniId !== undefined) {
      this.universiteService.fetchUniById(this.uniId).subscribe(data => {
        this.uniToUpdate = data;
        this.reactiveForm.patchValue({
          idUniversite: this.uniToUpdate.idUniversite,
          nomUniversite: this.uniToUpdate.nomUniversite,
          address: this.uniToUpdate.address
        });
      });
    }
  }
  

  update() {
    const updatedUni: universite = {
      idUniversite: this.reactiveForm.value.idUniversite,
      nomUniversite: this.reactiveForm.value.nomUniversite,
      address: this.reactiveForm.value.address
    };

    this.universiteService.updateUni(this.uniId!, updatedUni).subscribe(
      () => {
        console.log('University updated successfully');
        this.router.navigate(['universite']);
      },
      error => {
        console.error('Error updating university:', error);
        // Handle errors as needed
      }
    );
  }
}
