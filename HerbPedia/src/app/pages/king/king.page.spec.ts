import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KingPage } from './king.page';

describe('KingPage', () => {
  let component: KingPage;
  let fixture: ComponentFixture<KingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
