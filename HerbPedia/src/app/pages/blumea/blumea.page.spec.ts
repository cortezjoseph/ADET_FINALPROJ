import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlumeaPage } from './blumea.page';

describe('BlumeaPage', () => {
  let component: BlumeaPage;
  let fixture: ComponentFixture<BlumeaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlumeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
