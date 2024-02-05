package com.example.sprinprojet.contollers;


import com.example.sprinprojet.entity.Reservation;
import com.example.sprinprojet.services.IReservationService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/reservation")
public class ReservationController {
    IReservationService iReservationService;
    @GetMapping("/retrieve-all-Reservations")

    public List<Reservation> getReservationList(){
        List<Reservation>reservationList=iReservationService.retrieveAllReservations();
        return reservationList;
    }

    @PostMapping("/add-Reservation")
    public Reservation addReservation(@RequestBody Reservation r) {
        Reservation reservation = iReservationService.addReservation(r);
        return reservation;
    }
    @GetMapping("/retrieve-Reservation/{Reservation-id}")
    public Reservation retrieveReservation(@PathVariable("Reservation-id") String reservationId) {
        return iReservationService.retrieveReservation(reservationId);
    }
    @DeleteMapping("/remove-Reservation/{Reservation-id}")
    public void removeReservation(@PathVariable("Reservation-id") String idReservation) {
        iReservationService.removeReservation(idReservation);
    }
    @PutMapping("/update-Reservation")
    public Reservation updateReservation(@RequestBody Reservation r) {
        Reservation reservation= iReservationService.updateReservation(r);
        return reservation;
    }
}
