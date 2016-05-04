import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BcTypeaheadAppComponent } from '../app/bc-typeahead.component';

beforeEachProviders(() => [BcTypeaheadAppComponent]);

describe('App: BcTypeahead', () => {
  it('should create the app',
      inject([BcTypeaheadAppComponent], (app: BcTypeaheadAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bc-typeahead works!\'',
      inject([BcTypeaheadAppComponent], (app: BcTypeaheadAppComponent) => {
    expect(app.title).toEqual('bc-typeahead works!');
  }));
});
