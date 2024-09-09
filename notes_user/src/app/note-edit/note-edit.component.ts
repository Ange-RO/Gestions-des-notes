import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service'; 
import { Note } from '../interfaces/note'; 

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  note: Note | undefined;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNoteById(id).subscribe(note => {
      this.note = note;
    });
  }

  updateNote(): void {
    if (this.note) {
      this.noteService.updateNote(this.note.id, this.note).subscribe(() => {
        this.router.navigate(['/notes']); // Redirection vers la liste des notes après mise à jour
      });
    }
  }
}
