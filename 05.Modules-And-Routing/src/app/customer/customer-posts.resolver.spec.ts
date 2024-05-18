import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { customerPostsResolver } from './customer-posts.resolver';
import { IPost } from './customer.service';

describe('customerPostsResolver', () => {
  const executeResolver: ResolveFn<IPost[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => customerPostsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
