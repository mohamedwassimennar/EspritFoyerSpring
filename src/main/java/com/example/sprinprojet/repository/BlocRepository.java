package com.example.sprinprojet.repository;

import com.example.sprinprojet.entity.Bloc;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlocRepository extends JpaRepository<Bloc,Long> {
    Bloc findByNomBloc(String nom);
}
