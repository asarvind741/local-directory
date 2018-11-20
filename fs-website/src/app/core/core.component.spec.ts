import { TestBed, async } from '@angular/core/testing';
import { CoreComponent } from './core.component';
describe('CoreComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoreComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'b2b2'`, async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('b2b2');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to b2b2!');
  }));
});
