package com.gestiondesnotes.notes_app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestiondesnotes.notes_app.model.Category;
import com.gestiondesnotes.notes_app.repository.CategoryRepository;



@Service
public class CategoryService {

    
    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category non trouvée"));
        return category;
    }

    public Category createCategory(Category category) {
        Category newCategory = categoryRepository.save(category);
        return newCategory;
    }

    public Category updateCategory(Long id, Category category) {
        Category existingCategory  = categoryRepository
        .findById(id)
        .orElseThrow(() -> new RuntimeException("Category non trouvée"));
        existingCategory.setName(category.getName());
        categoryRepository.save(existingCategory);
    
        return existingCategory;
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}

