import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/books'; 

  getData() {
    return this.http.get(`${this.apiUrl}/data`);
  }

  public getBooks<T>(page: number, size: number) {
    return this.http.get<PagedResponse<BookResponse>>(`${this.apiUrl}?page=${page}&size=${size}`);
  }
}

