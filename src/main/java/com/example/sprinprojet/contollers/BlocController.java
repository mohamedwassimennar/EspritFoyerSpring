package com.example.sprinprojet.contollers;

import com.example.sprinprojet.entity.Bloc;

import com.example.sprinprojet.services.IBlocService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Bloc")
public class BlocController {
    IBlocService iBlocService  ; //on injecte l'interface car on peut faire appel à plusieurs interfaces
    @GetMapping("/retrieve-all-blocs")
    public List<Bloc> getBlocList(){
        List<Bloc>blocList=iBlocService.retrieveAllBlocs();
        return blocList;
    }

    @PostMapping("/add-bloc")
    public Bloc addBloc(@RequestBody Bloc b) {
       Bloc bloc = iBlocService.addBloc(b);
        return bloc;
    }
    @GetMapping("/retrieve-bloc/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long idBloc ) {

        return iBlocService.retrieveBloc( idBloc);
    }


    @DeleteMapping("/remove-bloc/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id") Long idBloc) {
        iBlocService.removeBloc(idBloc);
    }
    @PutMapping("/update-bloc")
    public Bloc updateBloc(@RequestBody Bloc b) {
        Bloc bloc= iBlocService.updateBloc(b);
        return bloc;
    }


}
