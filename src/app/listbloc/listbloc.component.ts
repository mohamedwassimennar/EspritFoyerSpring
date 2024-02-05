import { BlocService } from './../Services/BlocService';
import { BlocModel } from '../Models/Bloc';
import { Component, OnDestroy,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listbloc',
  templateUrl: './listbloc.component.html',
  styleUrls: ['./listbloc.component.css']
})
export class ListblocComponent implements OnInit ,OnDestroy{
  result = 0;
  listBlocs: BlocModel[]=[];
 
  showForm = false;
  selectedEtudiant: BlocModel | null = null; 
  searchTerm = '';
  searchResults: BlocModel[] = [];
  BlocNew: BlocModel = { idBloc:0 , nomBloc: '', capacitebloc:0 };

  
  constructor(private _router: Router, private _blocService: BlocService) {}

  ngOnInit(): void {
   
      console.log('I m mounted');
      
      this._blocService.getBlocList().subscribe({
        next: (data) => (this.listBlocs = data as BlocModel[]),
        error: (err) => console.log(err),
      });
    
    
  }
  goToAddBlocPage() {
    this._router.navigate(['/Bloc/add']);
  }
  navigateToUpdateBloc(idBloc: number) {
    this._router.navigate(['/Bloc/update', idBloc]); // Replace 123 with the actual ID
  }
  
  ngOnDestroy(): void {
    console.log('I m unmounted');
  }

 deleteBloc(idBloc: number | undefined) {
  this._blocService.DeleteBloc(idBloc).subscribe({
    next : ()=>this.listBlocs = this.listBlocs.filter(bloc=>bloc.idBloc!== idBloc)
  });
}




searchByName() {
if (this.searchTerm.trim() === '') {
  this.searchResults = [];
  return;
}

this.searchResults = this.listBlocs.filter(uni =>
  uni.nomBloc.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
);
}

}
