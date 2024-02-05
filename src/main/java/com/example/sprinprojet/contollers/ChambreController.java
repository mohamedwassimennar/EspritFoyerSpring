package com.example.sprinprojet.contollers;

import com.example.sprinprojet.entity.Chambre;

import com.example.sprinprojet.services.IChambreService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/chambre")
public class ChambreController {
    IChambreService iChambreService;

    @GetMapping("/retrieve-all-chambre")
    public List<Chambre> getChambreList(){
        List<Chambre>chambreList=iChambreService.retrieveAllChambres();
        return chambreList;
    }

    @PostMapping("/add-Chambre")
    public Chambre addChambre(@RequestBody Chambre ch) {
        Chambre chambre = iChambreService.addChambre(ch);
        return chambre;
    }
    @GetMapping("/retrieve-Chambre/{Chambre-id}")
    public Chambre retrieveChambre(@PathVariable("Chambre-id") Long chambreId) {
        return iChambreService.retrieveChambre(chambreId);
    }
    @DeleteMapping("/remove-Chambre/{Chambre-id}")
    public void removeChambre(@PathVariable("Chambre-id") Long idChambre) {
        iChambreService.removeChambre(idChambre);
    }
    @PutMapping("/update-Chambre")
    public Chambre updateEtudiant(@RequestBody Chambre ch) {
        Chambre chambre= iChambreService.updateChambre(ch);
        return chambre;
    }

}
