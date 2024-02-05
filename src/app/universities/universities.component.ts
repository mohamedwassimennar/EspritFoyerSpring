
import { Component,OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { universite } from '../Models/universite';
import { UniversiteService } from '../Services/universite.service';



@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit, OnDestroy {
  listUnis: universite[] = [];
  result = 0;
  newUni: universite = { idUniversite: 0, nomUniversite: '', address: '' };
  showForm = false;
  selectedUni: universite | null = null; 
  searchTerm = '';
  searchResults: universite[] = [];


  constructor(private _router: Router, private _universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.fetchUniversities();  
  }

  ngOnDestroy(): void {}

  fetchUniversities() {
    this._universiteService.fetchUnis().subscribe({
      next: (data) => (this.listUnis = data as universite[]),
      error: (err) => console.log(err),
    });
  }
  
  

  deleteUni(id: number) {
    this._universiteService.removeUni(id).subscribe({
      next : ()=>this.listUnis = this.listUnis.filter(universite=>universite.idUniversite!== id)
    });
  }
 

  addUni(uni: universite) {
    this._universiteService.addUni(uni).subscribe({
      next: (addedUni) => {
        this.listUnis.push(addedUni as universite);
        this.showForm = false; 
      },
      error: (err) => console.log(err),
    });
  }

  navigateToUpdateUni(id: number) {
    this._router.navigate(['/updateuni', id]);
  }

  downloadQRCode(id: number) {
    this._universiteService.qrcode(id).subscribe(
      (qrCode: Blob) => {
        const url = window.URL.createObjectURL(qrCode);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qr-code.png';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading QR code:', error);
      }
    );
  }


searchByName() {
  if (this.searchTerm.trim() === '') {
    this.searchResults = [];
    return;
  }

  this.searchResults = this.listUnis.filter(uni =>
    uni.nomUniversite.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
  );
}

  
}