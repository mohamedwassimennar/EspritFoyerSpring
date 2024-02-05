import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Etudiant } from '../Models/Etudiant';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { EtudiantService } from '../Services/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-card-list',
  templateUrl: './etudiant-card-list.component.html',
  styleUrls: ['./etudiant-card-list.component.css']
})
export class EtudiantCardListComponent implements OnInit,OnDestroy {
 
  @Input()
  listEtudiant!: Etudiant[]| null;
  searchResults: Etudiant[] = [];
  constructor(private dialog: MatDialog,private _router: Router, private _etudiantService: EtudiantService) {
  }
 
  ngOnInit() {

  }
  ngOnDestroy(): void {
    console.log('I m unmounted');
  }
  deleteEtudiant(id:number| undefined) {
    this._etudiantService.removeEtudiant(id).subscribe({
      next : ()=>this.listEtudiant = this.listEtudiant! .filter(etudiant=>etudiant.idEtudiant!== id)
    })}
  /*deleteEtudiant(id: BigInt | undefined) {
    this._etudiantService.removeEtudiant(id).subscribe({
      next : ()=> Etudiant.idEtudiant!== id
    });
  }*/
  editEtudiant({nomEt,prenomEt,studentEmail}:Etudiant) {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        nomEt,prenomEt,studentEmail
      };

      const dialogRef = this.dialog.open(EtudiantComponent,
          dialogConfig);


      dialogRef.afterClosed().subscribe(
          val => console.log("Dialog output:", val)
      );

  }
}
