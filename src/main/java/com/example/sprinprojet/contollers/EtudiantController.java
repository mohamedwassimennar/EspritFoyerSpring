package com.example.sprinprojet.contollers;

import com.example.sprinprojet.entity.Etudiant;
import com.example.sprinprojet.entity.Universite;
import com.example.sprinprojet.services.EtudiantServiceImp;
import com.example.sprinprojet.services.IEtudiantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/etudiant")
public class EtudiantController {
    IEtudiantService iEtudiantService;

    @GetMapping("/retrieve-all-etudiants")
          public List<Etudiant>getEtudiantList(){
        List<Etudiant>etudiantList=iEtudiantService.retrieveAllEtudiants();
        return etudiantList;
    }


    @PostMapping("/add-etudiant")
    public Etudiant addEtudiant(@RequestBody Etudiant e) {
        Etudiant etudiant = iEtudiantService.addEtudiant(e);
        return etudiant;
    }
    @GetMapping("/retrieve-etudiant/{etudiant-id}")
    @Operation(description="recuperer etudiants par id")
    @ApiResponses(value = {
            @ApiResponse(responseCode="200",description="found etudiant",
                    content={ @Content(mediaType  ="application/json" ,
                            schema = @Schema(implementation=Etudiant.class))}),
            @ApiResponse(responseCode="400",description=" non valid id", content=@Content),
            @ApiResponse(responseCode="404",description=" not found", content=@Content)
    }
    )
    @ResponseBody
    public Etudiant retrieveEtudiant(    @Parameter(description = "id") @PathVariable("etudiant-id") Long etudiantId) {
        return iEtudiantService.retrieveEtudiant(etudiantId);
    }
    @DeleteMapping("/remove-etudiant/{etudiant-id}")
    public void removeEtudiant(@PathVariable("etudiant-id") Long idEtudiant) {
        iEtudiantService.removeEtudiant(idEtudiant);
    }
    @PutMapping("/update-etudiant")
    public Etudiant updateEtudiant(@RequestBody Etudiant e) {
        Etudiant etudiant= iEtudiantService.updateEtudiant(e);
        return etudiant;
    }
    @PostMapping("/add-all-etudiants")
    public List addAllEtudiants(@RequestBody List<Etudiant>etudiants){
        List Listetudiant=iEtudiantService.addEtudiants(etudiants);
        return Listetudiant;
    }
    @PutMapping("/affecterEtRe/{idreservation}/{nom}/{prenom}")
    public Etudiant affecter(@PathVariable("prenom") String prenom ,@PathVariable("idreservation") String idReservation, @PathVariable("nom") String nom){
        Etudiant etudiant=iEtudiantService.affecterEtudiantAReservation( nom,  prenom,  idReservation);
        return etudiant;
    }


}
