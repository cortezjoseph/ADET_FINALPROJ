import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SourPage } from './sour.page';

describe('SourPage', () => {
  let component: SourPage;
  let fixture: ComponentFixture<SourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
