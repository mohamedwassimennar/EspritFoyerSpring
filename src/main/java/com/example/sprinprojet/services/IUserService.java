package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.User;

import java.io.IOException;
import java.util.List;

public interface IUserService {
    User addUser(User user);

    User updateUser(User user);

    void deleteById(long id);

    List<User> retrieveAllUsers();

    List addAllUsers(List<User> users);

    public byte[] generateQRCode(User user);

    User retrieveUsers(Long id);

    byte[] generatePdfForUser(User user) throws IOException;

    List<User> retrieveAllFoyers();
}
