import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoringaPage } from './moringa.page';

describe('MoringaPage', () => {
  let component: MoringaPage;
  let fixture: ComponentFixture<MoringaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoringaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
