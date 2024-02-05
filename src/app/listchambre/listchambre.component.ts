import { ChambreService } from 'src/app/Services/ChambreService';
import { ChambreModel } from './../Models/Chambre';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listchambre',
  templateUrl: './listchambre.component.html',
  styleUrls: ['./listchambre.component.css']
})
export class ListchambreComponent {
  result = 0;
  listChambres: ChambreModel[]=[];
 
  showForm = false;
  selectedEtudiant: ChambreModel | null = null; 
  searchTerm = '';
  searchResults: ChambreModel[] = [];
  ChambreNew: ChambreModel = { idChambre:0 , numeroChambre: 0,typeC:'' };

  
  constructor(private _router: Router, private _chambreService: ChambreService) {}

  ngOnInit(): void {
   
      console.log('I m mounted');
      
      this._chambreService.getChambreList().subscribe({
        next: (data) => (this.listChambres = data as ChambreModel[]),
        error: (err) => console.log(err),
      });
    
    
  }
  goToAddChambrePage() {
    this._router.navigate(['/Chambre/addChambre']);
  }
  navigateToUpdateChambre(idChambre: number) {
    this._router.navigate(['/Chambre/updateChambre', idChambre]); // Replace 123 with the actual ID
  }
  
  ngOnDestroy(): void {
    console.log('I m unmounted');
  }
  UpdateChambre(chambres: any) {
    // Votre logique pour modifier un étudiant ici
 } 
 deleteChambre(idChambre: number | undefined) {
  this._chambreService.DeleteChambre(idChambre).subscribe({
    next : ()=>this.listChambres = this.listChambres.filter(bloc=>bloc.idChambre!== idChambre)
  });
}
downloadQRCode(chambreId: number): void {
  this._chambreService.qrcode(chambreId).subscribe((qrCodeData: any) => {
    const blob = new Blob([qrCodeData], { type: 'image/png' });

    const link = document.createElement('a');
    link.download = `qrcode_chambre_${chambreId}.png`;
    link.href = window.URL.createObjectURL(blob);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

}
