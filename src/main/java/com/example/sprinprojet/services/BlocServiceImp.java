package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.Bloc;
import com.example.sprinprojet.entity.Chambre;
import com.example.sprinprojet.repository.BlocRepository;
import com.example.sprinprojet.repository.ChambreRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
@Slf4j
public class BlocServiceImp implements IBlocService{
    BlocRepository blocRepository;
     ChambreRepository chambreRepository;
    @Override
    public List<Bloc> retrieveAllBlocs() {
        return blocRepository.findAll();
    }

    @Override
    public Bloc addBloc(Bloc b) {
        return blocRepository.save( b);
    }

    @Override
    public Bloc updateBloc(Bloc b) {
        return blocRepository.save(b);
    }

    @Override
    public Bloc retrieveBloc(Long idBloc) {
        return blocRepository.findById(idBloc).get();
    }

    @Override
    public void removeBloc(Long idBloc) {
blocRepository.deleteById(idBloc);
    }

    public Bloc affecterChambresABloc (List<Long> numChambre, String nomBloc)
    {
        List<Chambre> ll = null ;
        int i = 0;
        Bloc b = blocRepository.findByNomBloc(nomBloc);
        while(numChambre != null)
        {
            Chambre cc = chambreRepository.findByNumeroChambre(numChambre.get(i));
            cc.setBloc(b);
            i++;
            chambreRepository.save(cc);
        }
        return b;

    }

    @Scheduled(fixedRate = 60000)


    public void  listeChambresParBloc() {
        List<Bloc> blocs = blocRepository.findAll();


        for (int i=0; i<blocs.size();i++) {
            log.info(blocs.get(i).getNomBloc() + ": " + blocs.get(i).getCapacitebloc());
           Set<Chambre> chambres =blocs.get(i).getChambres();
           chambres.stream().forEach(
                   chambre -> {
                       log.info("num chambre est : "+chambre.getNumeroChambre()+"est de type"+chambre.getTypeC());
                   }
           );
        }
    }
}
