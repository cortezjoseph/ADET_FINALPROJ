import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangosteenPage } from './mangosteen.page';

describe('MangosteenPage', () => {
  let component: MangosteenPage;
  let fixture: ComponentFixture<MangosteenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MangosteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
