import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoComponentComponent } from './informacao-component.component';

describe('InformacaoComponentComponent', () => {
  let component: InformacaoComponentComponent;
  let fixture: ComponentFixture<InformacaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
