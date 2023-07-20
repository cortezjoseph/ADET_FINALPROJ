import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurmericPage } from './turmeric.page';

describe('TurmericPage', () => {
  let component: TurmericPage;
  let fixture: ComponentFixture<TurmericPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TurmericPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
