import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffereceComponent } from './differece.component';

describe('DiffereceComponent', () => {
  let component: DiffereceComponent;
  let fixture: ComponentFixture<DiffereceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffereceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffereceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
