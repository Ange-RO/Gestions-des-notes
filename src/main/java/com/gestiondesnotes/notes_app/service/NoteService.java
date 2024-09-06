package com.gestiondesnotes.notes_app.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestiondesnotes.notes_app.model.Note;
import com.gestiondesnotes.notes_app.model.User;
import com.gestiondesnotes.notes_app.repository.NoteRepository;
import com.gestiondesnotes.notes_app.repository.UserRepository;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

     @Autowired
    private UserRepository userRepository;

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

    public Note createNote(Long userId, Note note) {
        User user = userRepository.findById(userId)
        .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        Note newNote = noteRepository.save(note);
        return newNote;
    }

    public Note updateNote(Long id, Note note) {
        Note updatedNote = noteRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Note non trouvée"));

        updatedNote.setNom(note.getNom());
        updatedNote.setDiscipline(note.getDiscipline());
        updatedNote.setNote(note.getNote());
        noteRepository.save(updatedNote);
        return updatedNote;
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }
}
