import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteCreateComponent } from './notes-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
// const routes: Routes = [
//   { path: '', redirectTo: '/notes', pathMatch: 'full' },
//   { path: 'notes', component: NotesListComponent },
//   { path: 'notes/create', component: NoteCreateComponent },
//   { path: 'notes/:id', component: NoteDetailComponent },
//   { path: 'notes/edit/:id', component: NoteEditComponent },
  
// ];

const routes: Routes = [
  { path: 'notes', component: NotesListComponent },
  { path: 'notes/new', component: NoteFormComponent },
  { path: 'notes/:id', component: NoteFormComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/:id', component: CategoryFormComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
