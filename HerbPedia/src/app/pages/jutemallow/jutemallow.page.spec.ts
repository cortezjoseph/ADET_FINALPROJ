import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JutemallowPage } from './jutemallow.page';

describe('JutemallowPage', () => {
  let component: JutemallowPage;
  let fixture: ComponentFixture<JutemallowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JutemallowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
