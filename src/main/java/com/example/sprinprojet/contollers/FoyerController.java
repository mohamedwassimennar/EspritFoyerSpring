package com.example.sprinprojet.contollers;


import com.example.sprinprojet.entity.Bloc;
import com.example.sprinprojet.entity.Etudiant;
import com.example.sprinprojet.entity.Foyer;

import com.example.sprinprojet.services.FoyerServiceImp;
import com.example.sprinprojet.services.IFoyerService;
import lombok.AllArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200") // Replace with the actual origin of your Angular app
@AllArgsConstructor
@RestController

@RequestMapping("/foyer")
public class FoyerController {
    private IFoyerService foyerService;

    @GetMapping("/retrieve-all-foyer")
    public List<Foyer> getFoyers() {
        List<Foyer> listFoyers = foyerService.retrieveAllFoyers();
        return listFoyers;
    }

    @GetMapping("/retrieve-foyer/{foyer-id}")
    public Foyer retrieveFoyer(@PathVariable("foyer-id") Long foyerId) {
        return foyerService.retrieveFoyer(foyerId);
    }

    @PostMapping("/add-foyer")
    public Foyer addFoyer(@RequestBody Foyer e) {
        Foyer foyer = foyerService.addFoyer(e);
        return foyer;
    }

    @DeleteMapping("/remove-foyer/{foyer-id}")
    public void removeFoyer(@PathVariable("foyer-id") Long foyerId) {
        foyerService.removeFoyer(foyerId);
    }

    @PutMapping("/update-foyer")
    public Foyer updateFoyer(@RequestBody Foyer e) {
        Foyer foyer= foyerService.updateFoyer(e);
        return foyer;
    }

    @GetMapping("/Foyerpagination")
    @ResponseBody
    public Page<Foyer> getAllFoyer(Pageable pageable) {
        return foyerService.lire(pageable);
    }

    @GetMapping("/export/excel")

    public ResponseEntity<InputStreamResource> exportFoyersExcel() throws IOException {

        List<Foyer> foyers = (List<Foyer>) foyerService.retrieveAllFoyers();
        ByteArrayInputStream bais = foyerService.experienceExcelReport(foyers);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=foyers.xlsx");
        return ResponseEntity.ok().headers(headers).body(new InputStreamResource(bais));
    }

    @GetMapping("/foyersize/{size}")
    List<Foyer> listUniverApartirDate(@PathVariable("size") long capacite){
        return foyerService.listefoyerwheresizebiggerthan(capacite);
    }

}
