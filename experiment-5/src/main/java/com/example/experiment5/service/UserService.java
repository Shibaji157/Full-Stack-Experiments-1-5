package com.example.experiment5.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.experiment5.dto.UserRequest;
import com.example.experiment5.exception.UserNotFoundException;
import com.example.experiment5.model.User;
import com.example.experiment5.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(UserRequest request) {
        User user = new User(
                request.getUid(),
                request.getName()
        );

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByUid(String uid) {
        return userRepository.findById(uid)
                .orElseThrow(() ->
                        new UserNotFoundException(
                                "User not found with UID: " + uid
                        )
                );
    }

    public User updateUser(String uid, UserRequest request) {
        User user = getUserByUid(uid);
        user.setName(request.getName());
        return userRepository.save(user);
    }

    public void deleteUser(String uid) {
        User user = getUserByUid(uid);
        userRepository.delete(user);
    }
}