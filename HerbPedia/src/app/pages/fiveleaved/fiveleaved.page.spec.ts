import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiveleavedPage } from './fiveleaved.page';

describe('FiveleavedPage', () => {
  let component: FiveleavedPage;
  let fixture: ComponentFixture<FiveleavedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiveleavedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
