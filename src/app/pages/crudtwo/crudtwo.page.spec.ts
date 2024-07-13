import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudtwoPage } from './crudtwo.page';

describe('CrudtwoPage', () => {
  let component: CrudtwoPage;
  let fixture: ComponentFixture<CrudtwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
