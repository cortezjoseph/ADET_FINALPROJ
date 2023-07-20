import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HolybasilPage } from './holybasil.page';

describe('HolybasilPage', () => {
  let component: HolybasilPage;
  let fixture: ComponentFixture<HolybasilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HolybasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
