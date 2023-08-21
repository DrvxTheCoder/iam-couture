import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMesureComponent } from './update-mesure.component';

describe('UpdateMesureComponent', () => {
  let component: UpdateMesureComponent;
  let fixture: ComponentFixture<UpdateMesureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMesureComponent]
    });
    fixture = TestBed.createComponent(UpdateMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
