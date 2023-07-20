import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgPage } from './ag.page';

describe('AgPage', () => {
  let component: AgPage;
  let fixture: ComponentFixture<AgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
