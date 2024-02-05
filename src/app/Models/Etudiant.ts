import { Reservation } from "./Reservation";

export class Etudiant {

    idEtudiant?: number;
    nomEt?: string;
   ecole?:string;
   prenomEt?: string;
   dateNaissance?:string;
    cin?: BigInt;
    studentEmail?: string;
    reservations?: Reservation[];
    selectedReservationId?: number;
}