import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagiarismResultComponent } from './plagiarism-result.component';

describe('PlagiarismResultComponent', () => {
  let component: PlagiarismResultComponent;
  let fixture: ComponentFixture<PlagiarismResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagiarismResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagiarismResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
