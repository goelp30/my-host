import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private http = inject(HttpClient);

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/getUsers');      
  }

  fetchUser(id: string): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+id);      
  }
}
