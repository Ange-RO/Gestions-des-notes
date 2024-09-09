package com.gestiondesnotes.notes_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestiondesnotes.notes_app.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
    
}
