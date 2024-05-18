import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

export interface ICustomer {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export interface IPost {
  id: number,
  userId: number;
  title: string;
  body: string;
}


export interface IAlbum {
  id: number;
  userId: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomer$(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>('https://jsonplaceholder.typicode.com/users');
  }

  getCustomerById$(id: number): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>('https://jsonplaceholder.typicode.com/users/' + id);
  }

  getPostsByCustomerId$(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    // return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    //   .pipe(
    //     map(posts => posts.filter(p => p.userId === id))   
    //   )
  }

  getAlbumsByCustomerId$(id: number): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>('https://jsonplaceholder.typicode.com/users/' + id + '/albums')
  }
}
