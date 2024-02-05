package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.Universite;

import java.util.List;

public interface IUniversiteService {
    List<Universite> retrieveAllUniversites();

    Universite addUniversites(Universite e);

    Universite updateUniversites(Universite e);

    Universite retrieveUniversites(Long idUniversite);

    void removeUniversites(Long idUniversite);

    public Universite affecterFoyerAUniversite (long idFoyer, String nomUniversite) ;

    public Universite desaffecterFoyerAUniversite (long idFoyer);
    public Universite getbyidUni(Long idUniversite);

    Integer countUniversites();

    List<Universite> rechercheParNom(String nomUniversite);
    public byte[] generateQRCode(Universite universite);
}
