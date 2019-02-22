import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionarayViComponent } from './dictionaray-vi.component';

describe('DictionarayViComponent', () => {
  let component: DictionarayViComponent;
  let fixture: ComponentFixture<DictionarayViComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionarayViComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionarayViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
