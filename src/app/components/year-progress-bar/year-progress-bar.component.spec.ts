import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearProgressBarComponent } from './year-progress-bar.component';

describe('YearProgressBarComponent', () => {
  let component: YearProgressBarComponent;
  let fixture: ComponentFixture<YearProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
