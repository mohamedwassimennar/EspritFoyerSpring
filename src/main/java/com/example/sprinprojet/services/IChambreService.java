package com.example.sprinprojet.services;


import com.example.sprinprojet.entity.Chambre;

import java.util.List;

public interface IChambreService {
    List<Chambre> retrieveAllChambres();

    Chambre addChambre(Chambre ch);

    Chambre updateChambre(Chambre ch);

    Chambre retrieveChambre(Long idChambre);

    void removeChambre(Long idChambre);
    void pourcentageChambreParTypeChambre();
}
