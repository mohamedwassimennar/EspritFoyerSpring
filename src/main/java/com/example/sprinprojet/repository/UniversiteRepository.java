package com.example.sprinprojet.repository;

import com.example.sprinprojet.entity.Universite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UniversiteRepository extends JpaRepository<Universite,Long> {

    Universite findByNomUniversite(String nomUniversite);






    @Query("select count(u) from Universite u")
    Integer countUniversites();

    @Query("select u from  Universite  u where u.nomUniversite=?1")
    List<Universite> rechercheParNom(String nomUniversite);

}
