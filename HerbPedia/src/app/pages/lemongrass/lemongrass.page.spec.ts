import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LemongrassPage } from './lemongrass.page';

describe('LemongrassPage', () => {
  let component: LemongrassPage;
  let fixture: ComponentFixture<LemongrassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LemongrassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
