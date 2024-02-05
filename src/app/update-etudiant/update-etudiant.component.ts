import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';
import { Reservation } from '../Models/Reservation';
import { EtudiantService } from '../Services/etudiant.service';
import { ReservationService } from '../Services/reservation.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

  etuToupdate?: Etudiant;
  etuId?: number;
  etuForm!: FormGroup;
  reservations!:Reservation[]
  selectedReservationId?:number;
  constructor(
    private router: Router,
    private _etudiantservice: EtudiantService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
   private _reservationService:ReservationService
  ) {}

  ngOnInit(): void {
   
    this.etuForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      ecole: ['', Validators.required],
      date: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      cin: ['', Validators.required],
      selectedReservationId: [this.etuToupdate?.selectedReservationId || null],
    });
    
    this.etuId = this.route.snapshot.params['id'];

    if (this.etuId !== undefined) {
      this._etudiantservice.fetchEtudiantById(this.etuId).subscribe(data => {
        this.etuToupdate = data;
        console.log('ID from route parameters:', this.etuId);
        console.log('ID from route parameters:', this.selectedReservationId);
        this.etuForm.patchValue({
          id: this.etuToupdate.idEtudiant,
          nom: this.etuToupdate.nomEt,
          prenom: this.etuToupdate.prenomEt,
          ecole: this.etuToupdate.ecole,
          date: this.etuToupdate.dateNaissance,
          Email: this.etuToupdate.studentEmail,
          cin: this.etuToupdate.cin,
          selectedReservationId:this.etuToupdate.selectedReservationId
        });
        this.loadReservations();
       
      });
    }
  }

 
  loadReservations() {
    // Assurez-vous que this.etuId est défini avant d'appeler fetchReservationsForEtudiant
    if (this.etuId !== undefined) {
      this._etudiantservice.fetchReservationsForEtudiant(this.etuId).subscribe(reservations => {
        // Mettez à jour la liste des réservations
        this.reservations = reservations;
      });
    } else {
      console.error('etudiant ID is undefined');
    }
  }
 

  updateReservationStatus() {
    const selectedReservationId = this.etuForm.value.selectedReservationId;
   
    if (selectedReservationId !== null) {
      // Utilisez votre service pour mettre à jour le statut de la réservation
      this._reservationService.updateReservationStatus(selectedReservationId).subscribe(
        updatedStatus => {
          console.log('Reservation status updated successfully', updatedStatus);
          // Mettez à jour le statut dans le formulaire (si nécessaire)
        },
        error => {
          console.error('Error updating reservation status:', error);
          // Gérez l'erreur comme nécessaire
        }
      );
    } else {
      console.error('Selected reservation ID is null');
    }
  }

  
  update() {
    const updatedetu: Etudiant = {
      nomEt: this.etuForm.value.nom,
      prenomEt: this.etuForm.value.prenom,
      ecole: this.etuForm.value.ecole,
      dateNaissance: this.etuForm.value.date,
      studentEmail: this.etuForm.value.Email,
      cin: this.etuForm.value.cin,
    };

    

    

    this._etudiantservice.updateEtudiant(this.etuId!, updatedetu).subscribe(
      () => {
        console.log('etudiant updated successfully');
        this.router.navigate(['/Etudiant']);
      },
      error => {
        console.error('Error updating etudiant:', error);
      }
    );
  }
}
