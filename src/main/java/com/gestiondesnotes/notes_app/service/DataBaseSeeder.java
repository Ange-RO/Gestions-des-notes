package com.gestiondesnotes.notes_app.service;

import com.github.javafaker.Faker;
import com.gestiondesnotes.notes_app.model.Category;
import com.gestiondesnotes.notes_app.model.Note;
import com.gestiondesnotes.notes_app.repository.CategoryRepository;
import com.gestiondesnotes.notes_app.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

@Component
public class DataBaseSeeder implements CommandLineRunner {

    private final Faker faker = new Faker();
    private final Random random = new Random();

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private NoteRepository noteRepository;

    @Override
    public void run(String... args) {
        // Generate categories
        Set<Category> categories = generateCategories(10);
        categoryRepository.saveAll(categories);

        // Generate notes
        generateNotes(categories, 50);
    }

    private Set<Category> generateCategories(int numberOfCategories) {
        Set<Category> categories = new HashSet<>();
        for (int i = 1; i < 11; i++) {
            Category category = Category.builder()
                .name(faker.commerce().department())
                .build();
            categories.add(category);
        }
        return categories;
    }

    private void generateNotes(Set<Category> categories, int numberOfNotes) {
        for (int i = 0; i < 15; i++) {
            Note note = Note.builder()
                .title(faker.lorem().sentence())
                .content(faker.lorem().paragraph())
                .category(getRandomCategory(categories))
                .build();
            noteRepository.save(note);
        }
    }

    private Category getRandomCategory(Set<Category> categories) {
        int index = random.nextInt(categories.size());
        return categories.stream().skip(index).findFirst().orElse(null);
    }
}
