package com.example.sprinprojet.repository;

import com.example.sprinprojet.entity.Foyer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoyerRepository extends JpaRepository<Foyer,Long> {
    Page<Foyer> findAll(Pageable pageable);

    @Query("select u from Foyer u where u.capaciteFoyer>=?1")
    List<Foyer> listefoyerwheresizebiggerthan(Long capacite);
}
