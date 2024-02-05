import { Component, ElementRef, OnDestroy ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { foyer } from '../Models/foyer';
import { FoyerService } from '../Services/foyer.service';


@Component({
  selector: 'app-foyers',
  templateUrl: './foyers.component.html',
  styleUrls: ['./foyers.component.css']
})
export class FoyersComponent  implements OnInit, OnDestroy{
  listUnis: foyer[] = [];
  result = 0;
  newUni: foyer = { idFoyer: 0, nomFoyer: '', capaciteFoyer: 0 };
  showForm = false;
  selectedUni: foyer | null = null; 
  searchTerm = '';
  searchResults: foyer[] = [];

  constructor(private _router: Router, private _foyerService: FoyerService, public el: ElementRef){}

  ngOnInit(): void {
    this.fetchUniversities(); 
  }

  ngOnDestroy(): void {}

  fetchUniversities() {
    this._foyerService.fetchfoyers().subscribe({
      next: (data) => (this.listUnis = data as foyer[]),
      error: (err) => console.log(err),
    });
  }
  deletefoyer(id: number) {
    this._foyerService.removefoyer(id).subscribe({
      next : ()=>this.listUnis = this.listUnis.filter(foyer=>foyer.idFoyer!== id)
    });
  }
 


  addfoyer(uni: foyer) {
    this._foyerService.addfoyer(uni).subscribe({
      next: (addedUni) => {
        this.listUnis.push(addedUni as foyer);
        this.showForm = false; 
      },
      error: (err) => console.log(err),
    });
  }



  

searchByName() {
  if (this.searchTerm.trim() === '') {
    this.searchResults = [];
    return;
  }

  this.searchResults = this.listUnis.filter(uni =>
    uni.nomFoyer.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
  );
}
exportExcel(): void {
  this._foyerService.exportFoyersExcel().subscribe((response) => {
    const contentDisposition = response.headers.get('Content-Disposition');
    const fileName = contentDisposition ? contentDisposition.split('=')[1] : 'foyers.xlsx';

    const blob = new Blob([response.body as BlobPart], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });
}

navigateToUpdatefoyer(id: number) {
  this._router.navigate(['foy/updatefoyer', id]);
}
}