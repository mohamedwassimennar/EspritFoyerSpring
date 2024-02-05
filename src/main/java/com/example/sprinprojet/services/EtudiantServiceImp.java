package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.Etudiant;
import com.example.sprinprojet.entity.Reservation;
import com.example.sprinprojet.repository.EtudiantRepository;
import com.example.sprinprojet.repository.ReservationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.sound.midi.MidiSystem;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class EtudiantServiceImp implements IEtudiantService{
    EtudiantRepository etudiantRepository ;
ReservationRepository reservationRepository;



    @Override
    public List<Etudiant> retrieveAllEtudiants() {
        return etudiantRepository.findAll();
    }

    @Override
    public Etudiant addEtudiant(Etudiant e) {
        return etudiantRepository.save(e);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant e) {
        return etudiantRepository.save(e);
    }

    @Override
    public Etudiant retrieveEtudiant(Long idEtudiant) {
        return etudiantRepository.findById(idEtudiant).get();
    }

    @Override
    public void removeEtudiant(Long idEtudiant) {
        etudiantRepository.deleteById(idEtudiant);

    }

    @Override
    public Etudiant affecterEtudiantAReservation(String nomEt, String prenomEt, String idReservation) {
        Etudiant etudiant = etudiantRepository.findByNomEtAndPrenomEt(nomEt, prenomEt);

        // Find the Reservation by ID
        Reservation reservation = reservationRepository.findById(idReservation).get();


        // Add the Etudiant to the Reservation's set of etudiant

        List<Reservation> reservations =  new ArrayList<>() ;
        reservations=etudiant.getReservations();
        reservations.add(reservation);

        etudiant.setReservations(reservations);
        // Update the Reservation
        etudiantRepository.save(etudiant);
        return etudiant;
    }



    @Override
    public List<Etudiant> addEtudiants(List<Etudiant> etudiants) {
        return etudiantRepository.saveAll(etudiants);
    }
}
