package com.example.sprinprojet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table( name = "Universite")
public class Universite implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name="idUniversite")
    private Long idUniversite; // Clé primaire
    private String nomUniversite;

    private String address;

    @OneToOne(mappedBy = "universite")
    private Foyer foyer;
    public void setFoyUni(Foyer foyer) {
    }
}
