import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplasPage } from './splas.page';

describe('SplasPage', () => {
  let component: SplasPage;
  let fixture: ComponentFixture<SplasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SplasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
