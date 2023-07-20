import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColeusPage } from './coleus.page';

describe('ColeusPage', () => {
  let component: ColeusPage;
  let fixture: ComponentFixture<ColeusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ColeusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
