import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueenPage } from './queen.page';

describe('QueenPage', () => {
  let component: QueenPage;
  let fixture: ComponentFixture<QueenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QueenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
