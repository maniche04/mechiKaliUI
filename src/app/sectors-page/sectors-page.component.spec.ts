import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsPageComponent } from './sectors-page.component';

describe('SectorsPageComponent', () => {
  let component: SectorsPageComponent;
  let fixture: ComponentFixture<SectorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
