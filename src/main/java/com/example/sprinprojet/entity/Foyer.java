package com.example.sprinprojet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.sql.ast.tree.from.MappedByTableGroup;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

@Entity

@Table(name="Foyer")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Foyer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idFoyer")
    private Long idFoyer;

    private String nomFoyer;

    private long capaciteFoyer ;

    private Boolean archived=false;


    @OneToOne
    @JsonIgnore
    private Universite universite; //foyer parent

    @OneToMany( cascade = CascadeType.ALL,mappedBy="foyer")
    private List<Bloc> blocs;


}
