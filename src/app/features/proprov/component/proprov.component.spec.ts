import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprovComponent } from './proprov.component';

describe('ProprovComponent', () => {
  let component: ProprovComponent;
  let fixture: ComponentFixture<ProprovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProprovComponent]
    });
    fixture = TestBed.createComponent(ProprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
