import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { CustomerService, IPost } from './customer.service';

export const customerPostsResolver: ResolveFn<IPost[]> = (route, state) => {
  const customerService = inject(CustomerService);
  const id = route.parent?.params['id']
  return customerService.getPostsByCustomerId$(id);
};
