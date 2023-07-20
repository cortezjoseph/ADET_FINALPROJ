import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForestteaPage } from './foresttea.page';

describe('ForestteaPage', () => {
  let component: ForestteaPage;
  let fixture: ComponentFixture<ForestteaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForestteaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
