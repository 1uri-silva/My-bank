import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

interface Banks {
  ispb: string;
  name: string;
  fullName: string;
  code: number;
}

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private url = 'https://brasilapi.com.br/api/banks/v1';

  constructor(private http: HttpClient) {}

  getAllBank(): Observable<Banks[]> {
    return this.http.get<Banks[]>(this.url);
  }

  getBankByCode(code: number): Observable<Banks> {
    return this.http.get<Banks>(this.url + `/${code}`);
  }
}
