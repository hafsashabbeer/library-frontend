import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagedResponse } from '../models/paged-response';
import { MemberResponse } from '../models/member-response';

@Injectable({ providedIn: 'root' })
export class MemberService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/members'; 

  getData() {
    return this.http.get(`${this.apiUrl}/data`);
  }

  public getMembers<T>(page: number, size: number) {
    return this.http.get<PagedResponse<MemberResponse>>(`${this.apiUrl}?page=${page}&size=${size}`);
  }
}
