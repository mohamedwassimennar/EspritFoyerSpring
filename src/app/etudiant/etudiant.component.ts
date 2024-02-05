import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../Services/etudiant.service';
import { Etudiant } from '../Models/Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent  {
 

  etudiantForm!: FormGroup;
 
  constructor(private fb: FormBuilder, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    // Initialisez le formulaire avec les contrôles requis
    this.etudiantForm = this.fb.group({
      nomEt: ['', Validators.required],
      prenomEt: ['', Validators.required],
      ecole: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      studentEmail: ['', [Validators.required, Validators.email]],
      cin: ['', Validators.required],
       // Initialisez le FormArray pour les réservations
    });
  
    
   
    
  }
  

  
  submitForm(): void {
    if (this.etudiantForm.valid) {
      const etudiantWithReservations = this.etudiantForm.value;
      
      this.etudiantService.addEtudiant(etudiantWithReservations).subscribe(
        etudiant => {
          console.log('Etudiant ajouté avec succès', etudiant);
         
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'étudiant:', error);
          
        }
      );
    } else {
      console.log('Formulaire non valide. Vérifiez les erreurs.');
    }
  }

  
}

