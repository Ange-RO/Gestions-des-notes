import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCreateComponent } from './note-create.component'; 

describe('NotesCreateComponent', () => {
  let component: NoteCreateComponent;
  let fixture: ComponentFixture<NoteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
