package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.Bloc;


import java.util.List;

public interface IBlocService {
    List<Bloc> retrieveAllBlocs();

    Bloc addBloc(Bloc b);

    Bloc updateBloc(Bloc b);

    Bloc retrieveBloc(Long idBloc);

    void removeBloc(Long idBloc);

}
