import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackcurrantPage } from './blackcurrant.page';

describe('BlackcurrantPage', () => {
  let component: BlackcurrantPage;
  let fixture: ComponentFixture<BlackcurrantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlackcurrantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
