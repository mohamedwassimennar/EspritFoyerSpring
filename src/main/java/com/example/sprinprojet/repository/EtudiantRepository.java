package com.example.sprinprojet.repository;

import com.example.sprinprojet.entity.Etudiant;
import com.example.sprinprojet.entity.Universite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {
    Etudiant findBynomEt(String nom);

    Etudiant findByNomEtAndPrenomEt(String nomEt, String prenomEt);
}
