package com.gestiondesnotes.notes_app.service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestiondesnotes.notes_app.model.Note;
import com.gestiondesnotes.notes_app.model.Category;
import com.gestiondesnotes.notes_app.repository.NoteRepository;
import com.gestiondesnotes.notes_app.repository.CategoryRepository;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

     @Autowired
    private CategoryRepository categoryRepository;

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note getNoteById(Long id) {
        Note note = noteRepository
                .findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Note non trouvée"));
        return note;
    }

    public Note createNote(Long categoryId, Note note) {
        Category category = categoryRepository.findById(categoryId)
        .orElseThrow(() -> new RuntimeException("Category non trouvé"));
        
        Note newNote = noteRepository.save(note);
        return newNote;
    }

    public Note updateNote(Long id, Note note) {
        Note updatedNote = noteRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Note non trouvée"));

        updatedNote.setTitle(note.getTitle());
        updatedNote.setContent(note.getContent());
        noteRepository.save(updatedNote);
        return updatedNote;
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }

   public List<Note> searchNotes(String query) {
        return noteRepository.findAll().stream()
            .filter(note -> note.getTitle().toLowerCase().contains(query.toLowerCase()) ||
                            note.getContent().toLowerCase().contains(query.toLowerCase()))
            .collect(Collectors.toList());
    }
}
