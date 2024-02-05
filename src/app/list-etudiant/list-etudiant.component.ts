import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Etudiant } from '../Models/Etudiant';
import { Router } from '@angular/router';
import { EtudiantService } from '../Services/etudiant.service';

import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  result = 0;
 
  @Input()
     listEtudiants: Etudiant[]=[];
 
  showForm = false;
  selectedEtudiant: Etudiant | null = null; 
  searchTerm = '';
  searchResults: Etudiant[] = [];
  
  
  
  constructor(private _router: Router, private _etudiantService: EtudiantService) {}
 



 ngOnInit(): void {
   
      console.log('I m mounted');
      
      this._etudiantService.findAllEtudiants().subscribe({
        next: (data) => (this.listEtudiants = data as Etudiant[]),
        error: (err) => console.log(err),
      });
    
    
  }
 
 
 /*searchByName() {
  if (this.searchTerm.trim() === '') {
    this.searchResults = [];
    return;
  }

  this.searchResults = this.listEtudiants!.filter(Etu =>
    Etu.nomEt?.toLowerCase().indexOf(this.searchTerm.toLowerCase())!==-1
  );
  
}*/
navigateToUpdate(id: BigInt | undefined) {
  this._router.navigate(['Etudiant/update/', id]);
}
}