package com.gestiondesnotes.notes_app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestiondesnotes.notes_app.model.User;
import com.gestiondesnotes.notes_app.repository.UserRepository;



@Service
public class UserService {
        @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return user;
    }

    public User createUser(User user) {
        User newUser = userRepository.save(user);
        return newUser;
    }

    public User updateUser(Long id, User user) {
        User updatedUser = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        updatedUser.setUsername(user.getUsername());
        updatedUser.setEmail(user.getEmail());
        updatedUser.setPassword(user.getPassword());
        userRepository.save(updatedUser);
        System.out.println("nouveau mot de pass : " + user.getPassword());
        return updatedUser;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}

