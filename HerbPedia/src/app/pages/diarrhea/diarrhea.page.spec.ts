import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiarrheaPage } from './diarrhea.page';

describe('DiarrheaPage', () => {
  let component: DiarrheaPage;
  let fixture: ComponentFixture<DiarrheaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiarrheaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
