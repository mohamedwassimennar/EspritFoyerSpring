export enum ReservationStatus {
    Annulee = 'Annulee',
    Confirmee = 'Confirmee',
    EnAttente = 'NON_CONFIRMEE',
  }


  export class Status {
    type: ReservationStatus = ReservationStatus.EnAttente;
  }
export class Chambre {
   
    idChambre?:bigint;
    
}

export class Reservation {
    id?: string;
    estValide?: boolean;
    anneeUniversitaire?: Date;
    dateCreation?: Date;
    status?: Status=new Status();
   chambre?: Chambre=new Chambre();
   
   
}