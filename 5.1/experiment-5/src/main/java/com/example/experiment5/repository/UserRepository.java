package com.example.experiment5.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.experiment5.model.User;

public interface UserRepository extends JpaRepository<User, String> {
}