package com.example.sprinprojet.contollers;


import com.example.sprinprojet.entity.Universite;
import com.example.sprinprojet.services.IUniversiteService;

import com.example.sprinprojet.services.UniversiteServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200") // Replace with the actual origin of your Angular app
@RestController
@AllArgsConstructor
@RequestMapping("/universite")

public class UniversiteController {
    private IUniversiteService universiteService;

    @Operation(description = "Get a list of all universities")
    @GetMapping("/retrieve-all-universities")
    public List<Universite> getUniversities() {
        List<Universite> listUniversities = universiteService.retrieveAllUniversites();
        return listUniversities;
    }

    @Operation(description = "Get a university by ID")
    @GetMapping("/retrieve-university/{university-id}")
    public Universite retrieveUniversite(@PathVariable("university-id") Long UniversityId) {
        return universiteService.retrieveUniversites(UniversityId);
    }

    @Operation(description = "Add a new university")
    @PostMapping("/add-university")
    public Universite addUniversite(@RequestBody Universite e) {
        Universite universite = universiteService.addUniversites(e);
        return universite;
    }

    @Operation(description = "Remove a university by ID")
    @DeleteMapping("/remove-university/{university-id}")
    public void removeUniversite(@PathVariable("university-id") Long foyerId) {
        universiteService.removeUniversites(foyerId);
    }

    @Operation(description = "Update a university")
    @PutMapping("/update-university")
    public Universite updateUniversite(@RequestBody Universite u) {
        Universite universite= universiteService.updateUniversites(u);
        return universite;
    }

    @Operation(description = "Set a foyer for a university")
    @PutMapping("/setfoyer/{idfoyer}/{nomuniversite}")
    public Universite setFoyer(@PathVariable ("idfoyer") Long foyerId,@PathVariable("nomuniversite") String nomUniversite) {
        Universite universite = universiteService.affecterFoyerAUniversite(foyerId,nomUniversite);
        return universite;
    }

    @Operation(description = "unSet a foyer for a university")
    @PutMapping("/unsetfoyer/{idfoyer}")
    public Universite unsetFoyer(@PathVariable ("idfoyer") Long foyerId) {
        Universite universite = universiteService.desaffecterFoyerAUniversite(foyerId);
        return universite;
    }

    @GetMapping("/rechercheParNom/{nomuniversite}")
    List<Universite> rechercheParNom(@PathVariable("nomuniversite") String nomUniversite){
        return universiteService.rechercheParNom(nomUniversite);
    }

    @GetMapping("/{id}/qr-code")
    public ResponseEntity<byte[]> generateQRCode(@PathVariable Long id) {
        Universite universite = universiteService.retrieveUniversites(id);
        byte[] qrCode = universiteService.generateQRCode(universite);

        if (qrCode != null) {
            return ResponseEntity.ok().header("Content-Disposition", "attachment; filename=qr-code.png").body(qrCode);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
