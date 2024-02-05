package com.example.sprinprojet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table( name = "Chambre")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Chambre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idChambre")
    private Long idChambre; // Clé primaire

    @Enumerated(EnumType.STRING)
    private TypeChambre typeC;

    private Long numeroChambre;

    @ManyToOne
    private Bloc bloc;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Reservation> Reservations;
// Constructeur et accesseurs (getters) et mutateurs (setters)

}
