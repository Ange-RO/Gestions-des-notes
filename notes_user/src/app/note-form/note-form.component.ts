import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { CategoryService } from '../services/category.service';
import { Note } from '../interfaces/note';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  note: Note = { id: 0, title: '', content: '', createdAt: '', updatedAt: '', category: null };
  categories: Category[] = [];

  constructor(
    private noteService: NoteService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      if (id) {
        this.noteService.getNoteById(id).subscribe(data => {
          this.note = data;
        });
      }
    }
  }

  saveNote(): void {
    if (this.note.id) {
      this.noteService.updateNote(this.note.id, this.note).subscribe(() => {
        this.router.navigate(['/notes']);
      }, error => {
        console.error('Error updating note:', error);
      });
    } else {
      this.noteService.createNote(this.note).subscribe(() => {
        this.router.navigate(['/notes']);
      }, error => {
        console.error('Error creating note:', error);
      });
    }
  }
}
