package com.example.sprinprojet.repository;

import com.example.sprinprojet.entity.Chambre;

import com.example.sprinprojet.entity.TypeChambre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ChambreRepository extends JpaRepository<Chambre,Long> {
    Chambre findByNumeroChambre(long numChambre);

    long countChambresByTypeC(TypeChambre tc);

}
