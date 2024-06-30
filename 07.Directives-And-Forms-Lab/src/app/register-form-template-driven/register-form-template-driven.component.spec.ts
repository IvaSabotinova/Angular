import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormTemplateDrivenComponent } from './register-form-template-driven.component';

describe('RegisterFormTemplateDrivenComponent', () => {
  let component: RegisterFormTemplateDrivenComponent;
  let fixture: ComponentFixture<RegisterFormTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFormTemplateDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
