import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

interface User {
  code: number;
  agency: number;
  account: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private storage: LocalStorageService) {}

  ngOnInit(): void {
    this.users = this.storage.get<User[]>('@user-bank');
  }
}
