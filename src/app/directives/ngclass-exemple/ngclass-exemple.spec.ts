import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgclassExemple } from './ngclass-exemple';

describe('NgclassExemple', () => {
  let component: NgclassExemple;
  let fixture: ComponentFixture<NgclassExemple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgclassExemple],
    }).compileComponents();

    fixture = TestBed.createComponent(NgclassExemple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
