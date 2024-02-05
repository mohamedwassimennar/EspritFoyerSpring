package com.example.sprinprojet.repository;

import com.example.sprinprojet.entity.User;
import com.example.sprinprojet.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Long countUsersByRole(UserRole role);

    User findByEmail(String email);
}
