package com.gestiondesnotes.notes_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestiondesnotes.notes_app.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
