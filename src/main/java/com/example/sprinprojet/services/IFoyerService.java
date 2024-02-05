package com.example.sprinprojet.services;



import com.example.sprinprojet.entity.Foyer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

public interface IFoyerService {
    List<Foyer> retrieveAllFoyers();

    Foyer addFoyer(Foyer e);

    Foyer updateFoyer(Foyer e);

    Foyer retrieveFoyer(Long idFoyer);

    void removeFoyer(Long idFoyer);
    Foyer addFoyerWithBloc (Foyer foyer);

    public ByteArrayInputStream experienceExcelReport(List<Foyer> foyers) throws IOException;

    Page<Foyer> lire(Pageable pageable);

    List<Foyer> listefoyerwheresizebiggerthan(Long capacite);


}
