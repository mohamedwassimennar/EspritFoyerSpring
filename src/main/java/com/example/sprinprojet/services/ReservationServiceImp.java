package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.Reservation;
import com.example.sprinprojet.repository.ReservationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class ReservationServiceImp implements IReservationService {
    ReservationRepository reservationRepository;

    @Override
    public List<Reservation> retrieveAllReservations() {
        return reservationRepository.findAll();
    }

    @Override
    public Reservation addReservation(Reservation r) {
        return reservationRepository.save(r);
    }

    @Override
    public Reservation updateReservation(Reservation r) {
        return reservationRepository.save(r);
    }

    @Override
    public Reservation retrieveReservation(String idReservation) {
        return reservationRepository.findById(idReservation).get();
    }

    @Override
    public void removeReservation(String idReservation) {
        reservationRepository.deleteById(idReservation);

    }
    public List<Reservation> getReservationParAnneeUniversitaire(Date dateDebut, Date dateFin )
    {

        List<Reservation> allReservations = reservationRepository.findByAnneeUniversitaireBetween(dateDebut,dateFin);
        return allReservations;

    }
}
