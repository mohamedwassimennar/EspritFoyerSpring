package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.Bloc;
import com.example.sprinprojet.entity.Chambre;
import com.example.sprinprojet.entity.Reservation;
import com.example.sprinprojet.entity.TypeChambre;
import com.example.sprinprojet.repository.BlocRepository;
import com.example.sprinprojet.repository.ChambreRepository;
import com.example.sprinprojet.repository.FoyerRepository;
import com.example.sprinprojet.repository.ReservationRepository;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import static java.time.temporal.TemporalAdjusters.firstDayOfYear;
import static java.time.temporal.TemporalAdjusters.lastDayOfYear;

@Service
@AllArgsConstructor
public class ChambreServiceImp implements IChambreService {
   ChambreRepository chambreRepository ;
   BlocRepository blocRepository;
   FoyerRepository foyerRepository;
   ReservationRepository reservationRepository;

   @Override
   public List<Chambre> retrieveAllChambres() {
      return chambreRepository.findAll();
   }

   @Override
   public Chambre addChambre(Chambre ch) {
      return chambreRepository.save(ch);
   }

   @Override
   public Chambre updateChambre(Chambre ch) {
      return chambreRepository.save(ch);
   }

   @Override
   public Chambre retrieveChambre(Long idChambre) {
      return chambreRepository.findById(idChambre).get();
   }

   @Override
   public void removeChambre(Long idChambre) {
      chambreRepository.deleteById(idChambre);

   }

    @Override
    public void pourcentageChambreParTypeChambre() {

    }

    public Set<Chambre>getChambreParNomBloc(String nomb){
      Bloc b =blocRepository.findByNomBloc(nomb);
      Set<Chambre> chambre=b.getChambres();
      return chambre;
}
   /*@Override
   @Scheduled(fixedRate = 60000)
   public void pourcentageChambreParTypeChambre() {

       List<Chambre> chambreByType = chambreRepository.findAll();
      long nb = chambreByType.stream().count();
     long  countParTypeSIMPLE = chambreRepository.countChambresByTypeC(TypeChambre.SIMPLE);
      long countParTypeDOUBLE = chambreRepository.countChambresByTypeC(TypeChambre.DOUBLE);
      long countParTypeTRIPLE = chambreRepository.countChambresByTypeC(TypeChambre.TRIPLE);
      System.out.println("Le nombre total des chambres est :" +nb);
      System.out.println("Le pourcentage des chambres de type SIMPLE est :" +(countParTypeSIMPLE*100)/nb);
      System.out.println("Le pourcentage des chambres de type DOUBLE est :" +(countParTypeDOUBLE*100)/nb);
      System.out.println("Le pourcentage des chambres de type TRIPLE est :" +(countParTypeTRIPLE*100)/nb);


   }*/
  /* @Scheduled(fixedRate = 60000)
   void nbPlacesDispo(){
List<Chambre>ch =chambreRepository.findAll();
   int x=0;
   int currentYear= LocalDate.now().getYear();
   LocalDate instance =LocalDate.now().withYear(currentYear);
      LocalDate dateStart = instance.with(firstDayOfYear());
      LocalDate dateEnd = instance.with(lastDayOfYear());
      for (Chambre chambre : ch) {
         List<Reservation> availablePlaces = reservationRepository.findByChambreNumeroChambreAndEstValideAndAnneeUniversitaireBetween(chambre.getNumeroChambre(),true,dateStart,dateEnd );
         int nbplace =availablePlaces.size();
         if(chambre.getTypeC() == TypeChambre.SIMPLE)
            x = 1;
         if(chambre.getTypeC() == TypeChambre.DOUBLE)
            x = 2;
         if(chambre.getTypeC() == TypeChambre.TRIPLE)
            x = 3;
         if((x - nbplace) > 0)
         {
            System.out.println("Chambre ID: " + chambre.getIdChambre() +
                    ", Places disponibles: " + (x - nbplace)  +
                    " pour l'année en cours."+ currentYear);
         }
         else
            System.out.println("nombre de place est negative");

      }
   }*/
}
