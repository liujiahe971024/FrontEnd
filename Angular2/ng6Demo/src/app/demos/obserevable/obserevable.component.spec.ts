import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserevableComponent } from './obserevable.component';

describe('ObserevableComponent', () => {
  let component: ObserevableComponent;
  let fixture: ComponentFixture<ObserevableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserevableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserevableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
