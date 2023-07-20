import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OreganoPage } from './oregano.page';

describe('OreganoPage', () => {
  let component: OreganoPage;
  let fixture: ComponentFixture<OreganoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OreganoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
