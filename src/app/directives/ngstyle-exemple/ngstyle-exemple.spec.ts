import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgstyleExemple } from './ngstyle-exemple';

describe('NgstyleExemple', () => {
  let component: NgstyleExemple;
  let fixture: ComponentFixture<NgstyleExemple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgstyleExemple],
    }).compileComponents();

    fixture = TestBed.createComponent(NgstyleExemple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
