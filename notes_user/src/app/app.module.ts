import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Importation nécessaire pour ngModel


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteCreateComponent } from './notes-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    HeaderComponent,
    FooterComponent,
    NoteDetailComponent,
    NoteCreateComponent,
    NoteEditComponent,
    NoteFormComponent,
    CategoryFormComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
