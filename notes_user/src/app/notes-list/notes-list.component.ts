import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service'; 
import { Note } from '../interfaces/note'; 

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];
  searchQuery: string = '';

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getAllNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  searchNotes(): void {
    if (this.searchQuery.trim()) {
      this.noteService.searchNotes(this.searchQuery).subscribe(data => {
        this.notes = data;
      });
    } else {
      this.loadNotes();
    }
  }

  
  deleteNote(id: number): void {
    this.noteService.deleteNoteById(id).subscribe(() => {
      this.loadNotes(); // Recharger les notes après suppression
    });
  }
}
