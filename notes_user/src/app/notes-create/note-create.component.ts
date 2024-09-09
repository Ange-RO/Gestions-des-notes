import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from '../interfaces/note'; 

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent {
  note: Note = {
    id: 1,
    title: '',
    content: '',
    createdAt: '',
    updatedAt: ''
  };

  constructor(private noteService: NoteService) { }

  createNote() {
    this.noteService.createNote(this.note).subscribe({
      next: (response) => {
        console.log('Note créée avec succès:', response);
        // Redirigez ou actualisez la vue si nécessaire
      },
      error: (error) => {
        console.error('Erreur lors de la création de la note:', error);
        // Gérez l'erreur
      }
    });
  }
}
