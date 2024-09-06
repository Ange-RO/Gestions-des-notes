package com.gestiondesnotes.notes_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestiondesnotes.notes_app.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    
}
