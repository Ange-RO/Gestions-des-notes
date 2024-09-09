import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service'; 
import { Note } from '../interfaces/note'; 
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: Note | undefined;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNoteById(id).subscribe(note => {
      this.note = note;
    });
}


}
